import multer from "multer";

function uploadFile() {
  //Al usar el almacenamiento de memoria, la información del archivo contendrá un campo llamado buffer que contiene el archivo completo.
  const storage = multer.memoryStorage({
    filename: function (req, file, cb) {
      let extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
      let filename = Date.now() + extension;
      cb(null, filename);
    }
  });

  const upload = multer({ storage, 
    limits:{fileSize: 100000000},
    fileFilter: function(req, file, cb) {
      let type = file.mimetype.startsWith('image/');
      type?cb(null, true):cb(new Error ('No es un archivo de tipo imagen'))
      }
    }
  ).single('photo');
  return upload;
}

export default uploadFile