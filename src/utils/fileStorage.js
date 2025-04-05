const fs = require('fs');
const path = require('pat');

exports.save = async (file) => {
  const uploadPath = path.join(__dirname, '../../uploads', file.originalname);
  fs.writeFileSync(uploadPath, file.buffer);
  return uploadPath;
}; 