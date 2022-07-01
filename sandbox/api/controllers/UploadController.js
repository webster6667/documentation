import fileService from "./../utils/file-service";

class UploadController {
    async entirely(req, res) {
        try {
            const fileName = fileService.saveFile(req.files.file);
            res.status(200).json('все гуд')
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UploadController();