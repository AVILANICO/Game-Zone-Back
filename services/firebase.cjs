let admin = require("firebase-admin");
//Fragmento de configuración de Admin SDK
let serviceAccount = require("../firebase-key.json");
const { date } = require("joi");

//en el BUCKET se guarda la direccion del Storage de Firebase.
const BUCKET = "minga-avila.appspot.com"

//inicializa la aplicación de Firebase en el backend.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

//creo una instancia de bucket para reutilizar la variable mas adelante.
const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
//Si no hay ningún archivo adjunto en la solicitud (req.file), el middleware pasa al siguiente middleware llamando a next().
  if(!req.file) return next();

//Si hay un archivo adjunto en la solicitud, se realiza lo siguiente:
//a. Se obtiene el archivo adjunto de la solicitud en la variable imagen. Luego, se genera un nombre único para el archivo, concatenando la marca de tiempo actual (Date.now()) con la extensión del archivo original.
  const imagen = req.file
  const nameImagen = Date.now() + "." + imagen.originalname.split('.').pop();

// b. Se crea un objeto file que representa el archivo en el bucket de almacenamiento usando el nombre generado anteriormente.
  const file = bucket.file(nameImagen);

// c. El búfer del archivo se utiliza para crear un flujo de escritura (write stream) en Firebase Storage. El flujo de escritura se encarga de transferir los datos del archivo desde el búfer al almacenamiento en la nube de Firebase.
  const stream = file.createWriteStream({
    metadata: {
      contentType: imagen.mimetype,
    }
  })

// d. Se manejan los eventos error y finish del flujo de escritura:
// Si ocurre un error durante la escritura del archivo, se muestra un mensaje de error en la consola.
  stream.on("error", (e) => {
    console.error(e);
  })

// Si la escritura del archivo se completa correctamente, se realiza lo siguiente:
// El archivo se hace público mediante file.makePublic() para permitir su acceso público.
// Se genera la URL pública del archivo en Firebase Storage mediante la concatenación de la URL base de Firebase Storage y el nombre del archivo generado. La URL se asigna a req.file.firebaseUrl.
  stream.on("finish", async () => {
    //retornar un archivo publico
    await file.makePublic();

    //obtener una url publica
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameImagen}`
    
    next();
  })

  stream.end(imagen.buffer);
}

module.exports = uploadImage;