const mongoose = require('mongoose');
require('dotenv').config();
const {DB_USERNAME} = process.env;
const {DB_PASSWORD} = process.env

const ATLAS_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@dbcluster.xsx0y.mongodb.net/myDB?retryWrites=true&w=majority`

//create the connection function
// const connectDB = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(()=>{
//         console.log('MongoDB connected');

//         //seed data
//     })
//     .catch((err) => {
//         console.error(err.message);

//         //exit connection
//         process.exit(1);
//     })
// }

//Async mongoose conn
const connectDB = async () => {
    try {
        await mongoose.connect(ATLAS_URI, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        });
        console.log('MongoDB Atlas cloud connected')

        //seed data
        
    } catch (error) {
        console.error(error.message)
        //exit with failure
        process.exit(1)
    }
}

module.exports = connectDB;