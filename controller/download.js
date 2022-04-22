const path = require('path')
const File = require('../models/File')

const downloadFile = async (req, res) => {
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) {
        return res.status(404).json({ success: 'Failed', message: 'Link has been expired.' })
    }
    // const filePath = `${process.env.APP_BASE_URL}/${__dirname}/../${file.path}`;
    const sendFilePath = `${process.env.APP_BASE_URL}/${file.path}`;

    res.status(200).json({ success: 'Failed', link: sendFilePath })
}



module.exports = { downloadFile }