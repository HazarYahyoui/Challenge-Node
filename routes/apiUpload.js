const express= require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const imgStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        const fileExtention= path.extname(file.originalname);
        // cb(null, file.originalname);
        const fileName= Date.now()+ fileExtention ;
        cb(null, fileName);
    }
});
function FilterImage (req, file, cb){
    const fileExtention= path.extname(file.originalname);
    const AcceptedExtention= ['.jpg', '.jpeg' , '.png', '.gif'];
    cb(null, AcceptedExtention.includes(fileExtention));
}
const imgUpload= multer({
    storage: imgStorage,
    fileFilter: FilterImage
});

const {createImage, createMultipleImages}= require('../controllers/UploadFichier');

router.post('/singleImage', imgUpload.single('image') , createImage);
router.post('/multipleImages', imgUpload.array('images'),createMultipleImages  )


module.exports= router;

