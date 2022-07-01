import path from "path";
import fs from 'fs'

class UploadController {
    async uploadChunk({body, files}, res) {
        try {
            const {order, count} = body,
                  {chunk} = files

            const filePath = path.resolve(`static/1/${order}`);

            fs.writeFileSync(filePath, chunk.data, 'utf8')


            const dirName = path.resolve('static/1')
            let uploadedChunks = fs.readdirSync(dirName)

            if (+uploadedChunks.length === +count) {
                const newFileName = Date.now()

                for (var i in uploadedChunks){
                    var name = dirName + '/' + uploadedChunks[i];
                    let fileContent = fs.readFileSync(name);

                    fs.appendFileSync(`static/${newFileName}.png`, fileContent);
                    fs.unlinkSync(name)
                }

                // fs.rmdirSync(dirName)

                res.status(200).json('последний')
            } else {
                res.status(200).json('остальеые')
            }
            

            //
            // if (+files.length === +count) {
            //         res.status(200).json('последний')
            // } else {
            //     res.status(200).json('остальеые')
            // }

            // for (var i in files){
            //     var name = dirName + '/' + files[i];
            //     let fileContent = fs.readFileSync(name);
            //
            //
            //     fs.appendFileSync('static/test.png', fileContent);
            // }


            // uploads.push({chunk, order})
            //
            // if (+uploads.length === +count) {
            //
            //     // от меньшего к большему
            //     let fromLessToLargest = (a, b) => {
            //         return a.order - b.order;
            //     }
            //
            //     uploads.sort(fromLessToLargest).forEach(({chunk}) => {
            //         fs.appendFileSync(filePath, chunk.data)
            //     })
            //
            //     res.status(200).json('все гуд')
            //     uploads = []
            // } else {
            //     res.status(200).json('все гуд')
            // }
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }
}

export default new UploadController();