import mongoose from 'mongoose';


const connectToMongoDb = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        const connObject = conn.connection;
        console.log(`MongoDb Connected to ${connObject.name} DB`);
    } catch (error) {
        console.log("Error Connecting To Mongo Db : ",error)
    }

}

export default connectToMongoDb;