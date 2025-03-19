import mongoose from 'mongoose';

const url = "mongodb+srv://cpancho:bdPanchoPolanco11@panchoweb.79agh.mongodb.net/?retryWrites=true&w=majority&appName=PanchoWeb";

export const connectDB = async() => {
    try{
        await mongoose.connect(url);
        console.log('Database connected');
    } catch(error){
        console.error('Error connecting to the database', error);
    }
};