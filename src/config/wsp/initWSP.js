const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const dialogflow = require("@google-cloud/dialogflow");
const path = require("path");
require("dotenv").config();

const credentialPath = path.join(
  __dirname,
  "<RUTA DE TU ARCHIVO DE CREDENCIALES DE DIALOGFLOW>"
);
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: credentialPath,
});

let clienteWSP = null;

const inicializarWSP = async () => {
  // Create a new client instance
  clienteWSP = new Client({
    authStrategy: new LocalAuth(),
  });

  // When the client received QR-Code
  clienteWSP.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  //
  clienteWSP.on("loading_screen", (porcentaje, mensaje) => {
    console.log(`cargando: ${porcentaje} - ${mensaje}`);
  });
  //
  clienteWSP.on("authenticated", () => {
    console.log("Autenticado");
  });
  //
  clienteWSP.on("auth_failure", (msg) => {
    console.log("Error de autenticación", msg);
  });

  // When the client is ready, run this code (only once)
  clienteWSP.once("ready", () => {
    console.log("Client is ready!");
  });

  //MENSAJES
  clienteWSP.on("message", async (message) => {
    try {
      const sessionPath = sessionClient.projectAgentSessionPath(<ID_DE_TU_PROYECTO_DIALOGFLOW>, message.from
      );
      console.log(`Mensaje recibido del usuario - ${message.from}: ${message.body}`);

      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: message.body,
            languageCode: "es",
          },
        },
      };

      const [response] = await sessionClient.detectIntent(request);
      const result = response.queryResult.fulfillmentText;
      console.log("Respuesta de WhatsApp:", result);

      await clienteWSP.sendMessage(message.from, result);
    } catch (error) {
      console.error("Error al procesar el mensaje:", error.message);
      console.error("Error al procesar el mensaje:", error);
    }
  });

  // Start your client
  await clienteWSP.initialize();
};

const enviarMensajeWSP = async (numero, mensaje) => {
  try {
    numero = numero + " @c.us";
    const response = await clienteWSP.sendMessage(numero, mensaje);
    return response;
  } catch (error) {
    const mensajeError = `Error al enviar el mensaje a ${numero}`;
    console.log(mensajeError, error);
    throw new Error(mensajeError);
  }
};

module.exports = {
  inicializarWSP,
  enviarMensajeWSP,
};
