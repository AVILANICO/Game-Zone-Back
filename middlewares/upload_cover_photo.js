import multer from "multer";

function upload_cover_photo() {
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
  ).single('cover_photo');
  return upload;
}

export default upload_cover_photo
