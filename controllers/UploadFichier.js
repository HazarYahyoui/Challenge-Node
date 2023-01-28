
exports.createImage= async(req,res)=>{
  
    try {
        console.log(req.file);
        if (req.file != undefined) {
            res.send({
                message: 'File Uploaded successfuly'
            })
        }else {
            res.send({
                message: 'File Not Found'
            })
        }
    } catch (error) {
        res.send({
            message: error.message 
        }) 
    }
};

exports.createMultipleImages= async(req,res)=>{
  
    try {
        console.log(req.file);
        if (req.file != undefined) {
            res.send({
                message: 'Files Uploaded successfuly'
            })
        }else {
            res.send({
                message: 'Files Not Found'
            })
        }
    } catch (error) {
        res.send({
            message: error.message 
        }) 
    }
}