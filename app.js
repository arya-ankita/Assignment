const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./index');



const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useMongoClient: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(() => console.log('DB connection successfull!'));


// Server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

