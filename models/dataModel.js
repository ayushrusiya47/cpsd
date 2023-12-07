// create a model should contain a string , and attributes
//

import mongoose from 'mongoose';
const { Schema } = mongoose;

const dataSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    url: String,
    rating: Number,
    tags: [String],
    data: String
});

const Data = mongoose.model('Data', dataSchema);

export default Data;
