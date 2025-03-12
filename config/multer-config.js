const multer= require("multer");

const storage= multer.memoryStorage();           //creating memory storage
const upload = multer({storage:storage});        //multer uploads by default to 
 console.log(upload);
module.exports = upload;

