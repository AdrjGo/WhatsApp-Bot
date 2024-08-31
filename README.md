# WhatsApp automático

![Imagen de perfíl](https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg "WhatsApp")
___
## WhatsAppWeb.js y DialogFlow (GoogleCloud)
#### About
Este proyecto consiste en un bot de WhatsApp desarrollado con whatsapp-web.js y Dialogflow, diseñado para interactuar de manera automatizada con usuarios de WhatsApp. El bot utiliza la biblioteca whatsapp-web.js para conectarse a WhatsApp Web y manejar mensajes, mientras que Dialogflow, un servicio de procesamiento de lenguaje natural de Google, se encarga de interpretar y responder a las consultas de los usuarios.

El bot está configurado para recibir mensajes, procesarlos utilizando Dialogflow, y luego devolver una respuesta relevante al usuario a través de WhatsApp. La autenticación se maneja mediante LocalAuth, y la conexión con Dialogflow se establece usando un archivo de credenciales JSON para acceder al agente de Dialogflow configurado en Google Cloud.

Este proyecto es ideal para crear asistentes virtuales, sistemas de atención al cliente, o cualquier otra aplicación que requiera interacción automatizada por medio de WhatsApp.
___

## Links
- [WhatsAppWeb.js](https://wwebjs.dev/)
- [DialogFlow (GoogleCloud)](https://cloud.google.com/dialogflow/?_gl=1*1thujk3*_up*MQ..&gclid=Cj0KCQjw28W2BhC7ARIsAPerrcLb_cBU5SWwpdw6zweYJLn6aCDqi7aPZnSj_tcZJIQLDTF5yd7hub8aAgRQEALw_wcB&gclsrc=aw.ds&hl=es_419)

### Instalación
```bash
npm install (instalar todos los paquetes)
```

### Uso
- Clona el repositorio:
```bash
https://github.com/AdrjGo/WhatsApp-Bot.git
```
- Es necesario tener una cuenta en GoogleCloud (gratis o de paga), para obtener las credenciales del servicio.
  - Entrena al modelo DialogFlow para que tengas respuestas más a tu gusto
- Una vez clonado y modificado las credenciales realiza el siguiente comando para iniciar el proyecto
```bash
npm run dev
```
- Te aparecerá un código QR que debes escanear con la aplicación de WhatsApp
- Y listo, tendrás activo las respuestas automáticas dentro de WhatsApp
