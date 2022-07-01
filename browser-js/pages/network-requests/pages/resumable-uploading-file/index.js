import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload';
import router from "./router";
import path from "path";
import fs from "fs";

const PORT = 5001,
      app = express()

app.set('view engine', 'ejs');


app.get('/', (reg, res) => {
    res.render('index')
})

app.get('/tes', (reg, res) => {

    const dirName = path.resolve('static')
    let files = fs.readdirSync(dirName);

    for (var i in files){
        var name = dirName + '/' + files[i];
        let fileContent = fs.readFileSync(name);


        fs.appendFileSync('static/test.png', fileContent);
    }

    res.end()

})



app.use(cors({origin: '*'}));
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

app.listen(PORT, () => {
    console.log('Server start on PORT:' + PORT);
})

