import mongoose from 'mongoose';

const connectToDB = async () => {

    const connectionUrl =  "mongodb+srv://shobhanrahman100:jn1JAMDh8JhKwHPe@cluster0.peycs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    mongoose 


         .connect(connectionUrl)
         .then(() => console.log("Database connection successfully"))
         .catch((e) => console.log((e)))





};

export default connectToDB;


