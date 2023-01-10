const userRouter = require('./src/user-router');
const Application = require('./framework/Application');
const jsonParser = require('./framework/parseJson');
const urlParser = require('./framework/parseUrl');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = new Application();

app.use(jsonParser);
app.use(urlParser('http://localhost:5000'));
app.addRouter(userRouter);


const DB_URI = 'mongodb://mongo:27017/serverApp';

const start = async () => {
    try {
        await mongoose.connect(DB_URI);
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch(error) {
        console.log(error);
    }
}

start();