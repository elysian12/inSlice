const multer = require('multer')
const path = require('path')
const File = require('../models/File')
const { v4: uuidv4 } = require('uuid')



let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
})

let upload = multer({
    storage,
    limits: { fileSize: 1000000 * 100 }
}).single('myFile');


const uploadFile = (req, res) => {



    upload(req, res, async (err) => {
        // validate req
        if (!req.file) {
            return res.status(400).json({ status: 'Failed', message: 'All fields are required' });
        }


        if (err) {
            return res.status(500).json({
                success: 'Failed',
                message: err.message
            });
        }

        // Store into Mongo Database
        const file = new File({
            filename: req.file.filename,
            uuid: uuidv4(),
            path: req.file.path,
            size: req.file.size,

        });

        const response = await file.save();

        return res.status(200).json({ status: 'success', file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
    });



    // res.status(200).json({ status: "Success" })
}


module.exports = { uploadFile }