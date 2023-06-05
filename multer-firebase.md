# BACKEND
1. En el backend, utilicé **Multer** para manejar la carga de archivos y **Firebase** para almacenar y servir las imágenes.
2. npm install multer firebase

## CONFIGURACIÓN DE MULTER
1. Creé un Middleware para Multer (upload_file) donde configuré las opciones de almacenamiento para "/register" y "/mangas":
  * import multer from "multer";
    const storage = multer.memoryStorage();
    const upload = multer({ storage });
    export default upload;

2. Tanto en la ruta de registro de usuarios como en la de mangas, utilicé Multer para manejar la carga de archivos:
  ### /register
  * import uploadFile from '../middlewares/upload_file.js'
  * Ruta de registro de usuarios: router.post('/register', uploadFile(), uploadImage, validator(userCreateSignUp), accountExistsSignUp, register)
  ### /mangas
  * import upload_cover_photo from "../middlewares/upload_cover_photo.js";
  * Ruta de mangas: router.post('/', upload_cover_photo(), uploadImage, passport.authenticate('jwt',{session:false}),validator(mangaCreate), is_active, exist_title, is_property_of, create)

## CONFIGURACION DE FIREBASE
1. Creé un proyecto en Firebase y obtuve las credenciales necesarias para acceder a mi proyecto que estan en (firebase-key.json).

2. En el archivo (firebase.cjs) configuré el Firebase con mis credenciales:
  * admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET});
    const bucket = admin.storage().bucket();
    const uploadImage = (req, res, next) => {}
    module.exports = uploadImage;

3. Tanto en la ruta de registro de usuarios como en la de mangas, utilicé Firebase para almacenar las imagenes:
  ### /register
  * import uploadImage from '../services/firebase.cjs';
  * Ruta de registro de usuarios: router.post('/register', uploadFile(), uploadImage, validator(userCreateSignUp), accountExistsSignUp, register)
  
  ### /mangas
  * import uploadImage from '../services/firebase.cjs';
  * Ruta de mangas: router.post('/', upload_cover_photo(), uploadImage, passport.authenticate('jwt',{session:false}),validator(mangaCreate), is_active, exist_title, is_property_of, create)




