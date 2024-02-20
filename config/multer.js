const multer = require("multer");
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir = path.join(__dirname, '../uploads/');
        // let dir = 'uploads/'
        cb(null, dir);
      },
      filename: (req, file, cb) => {
        cb(null,Date.now() + '-' + file.originalname);
      },
    });
    const upload = multer({ storage: storage });
    module.exports = upload;