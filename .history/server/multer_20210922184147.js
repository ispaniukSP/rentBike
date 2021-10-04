import multer from 'multer';
import fs from 'fs';
import shell from 'shelljs';
import path from 'path';

function checkFileType(file) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|pdf/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return true;
  }
  return false;
}
const discStorage = multer.diskStorage({
  destination(req, file, cb) {
    if (!fs.existsSync('./temp')) {
      shell.mkdir('-p', './temp');
    }
    cb(null, './temp');
  },
  filename(req, file, cb) {
    try {
      const isTypeOk = checkFileType(file);
      if (!isTypeOk) {
        return cb(new Error('File MIME type or extention are not correct.'));
      }
      const name = file.originalname; // shortid.generate() + path.extname(file.originalname);
      req.fileName = name;
      return cb(null, name);
    } catch (err) {
      return cb(new Error(err));
    }
  },
});
export default multer({ storage: discStorage });