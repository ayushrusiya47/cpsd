import mongoose from 'mongoose';

const mongoUrl = 'mongodb+srv://existenceispain9:H1SmPKET9Whon7Ri@cluster0.gl2uzdh.mongodb.net/'

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
// Path: server.js