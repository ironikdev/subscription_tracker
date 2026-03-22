import mongoose from 'mongoose';
import {DB_URI, NODE_ENV} from "../config/env.js";

if(!DB_URI){
    throw new error('Please provide the DB_URI inside .env<development/production>.local');
}

const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`MongoDB Connected ${NODE_ENV} mode`);

    } catch(error){
        console.error('error connecting database',error);
        process.exit(1);
    }
}
export default connectToDatabase;