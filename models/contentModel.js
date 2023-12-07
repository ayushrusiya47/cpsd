// create a model should contain a string , and attributes
//

import mongoose from 'mongoose';
const { Schema } = mongoose;

const contentSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    url: String,
    rating: Number,
    tags: [String],
    data: String
});

const Content = mongoose.model('Content', contentSchema);

export default Content;
