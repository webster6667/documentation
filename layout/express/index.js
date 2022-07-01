import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload';
import router from "./router";

const PORT = 5001,
      app = express()

app.set('view engine', 'ejs');


app.get('/', (reg, res) => {
    res.render('index')
})

app.use(cors({origin: '*'}));
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

app.listen(PORT, () => {
    console.log('Server start on PORT:' + PORT);
})

