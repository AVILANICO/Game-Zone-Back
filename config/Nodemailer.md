# Documentación para el código de nodemailer

Este código usa el módulo nodemailer para enviar correos electrónicos desde una cuenta de Gmail a un usuario.

# Función createMailTransporter

Esta función es asíncrona y recibe un parámetro user que debe ser un objeto con una propiedad email que contenga la dirección de correo electrónico del destinatario.

La función hace lo siguiente:

IMPORTANTE:

- Crea un objeto transporter usando nodemailer.createTransport con la configuración de SMTP para Gmail. Se usan las variables de entorno EMAIL y EMAIL_PASS para autenticarse con la cuenta de Gmail.
Nota: para este paso el EMAIL Y EMAIL_PASS tienes que crearlos, los pasos son:
    - crearse una cuenta de gmail
    -ir a 'GESTIONAR TU CUENTA DE GOOGLE'
    -una vez alli buscar la opcion seguridad que se encuentra al lado izquierdo
    -ya en la parte de seguridad vas a buscar donde diga verificacion de 2 pasos y la implementas 
    -una vez ya tengas la verificacion de 2 pasos vas a buscar la opcion 'contraseña de aplicacion' si no lo encuentras usa la barra de busqueda que te brinda el GESTIONAR TU CUENTA DE  
     GOOGLE que esta en la parte superior 
    -una vez alli le va a salir 2 opciones de unos desplegables de opciones en el primero escogen el tipo de aplicion en este caso escogen 'otra' 
    -despues de seleccionar otra les va a pedir el nombre de la app en este caso le ponemos adminAPI 
    -ya por ultimo le damos generar y el te va a dar una contraseña (es importante que la gurdes porque si se te pierde tienes que volver a repetir todos los pasos anteriores)
    -ya teniendo esa contraseña ya pueden ir a su .env donde estan las variables de entorno y en EMAIL poner el correo que creaste o el que hayas usado y en EMAIL_PASS ponen la        
     contraseña que les dio google no la contraseña que le diste a tu cuenta ya que por tema de certificacion por token y por temas de seguridad si usas tu contraseña gmail no te permite 
     pasar o en este caso enviar correos, pero con la contraseña de aplicacion si te permite hacer esos envios de email ya que google la reconoce y le brinda los accesos necesarios para 
     poder enviar el correo


- Usa el método transporter.sendMail para enviar un correo electrónico con el remitente "Minga" <mingaverdemh@gmail.com>, el destinatario user.mail, el asunto "Verify your email..." y el contenido HTML "<b>Hello world?</b>". Este método devuelve una promesa que se espera con await y se guarda en la variable info.

- Devuelve la variable infoEmail que contiene información sobre el correo electrónico enviado.

## Nota: 

import nodemailer from 'nodemailer' se importa en donde se crea el transport en este caso en nodemailer.js y lo unico que se debe de importar para usar el envio de emails es createEmailTransporter donde se requiera y siempre enviarle un usuario el cual debe de contener al menos el email

## En nuestro caso 

Para la implementacion lo hicimos dentro de la carpeta auth en el arcivo register.js en el momento de crear al usuaro o registrarce. Por ejemplo:

```js

import createEmailTransporter from '../../config/nodemailer.js';

try {
        let one = new User(req.body)
        createEmailTransporter(one)//envio del mail para verificacion
          .then(info => console.log(info))
          .catch(error => console.log(error))
        await one.save()
        return res.status(201).json({
          message: 'user created successfully!!',
          user: one.email,
          success: true,
          timestamps: one.createdAt  
        })
      } catch (error) {
        console.log(error)
        next(error)
      }

```

