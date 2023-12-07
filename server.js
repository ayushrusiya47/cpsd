// create a server
import express from 'express';
import connectDB from './connectDB.js';
import bodyParser from 'body-parser';
const app = express();
import cors from 'cors';
app.use(cors());

// allow access from any domain
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}
);

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
connectDB();

import Content from './models/contentModel.js';
import Data from './models/dataModel.js';

app.post('/api/content', async (req, res) => {

    console.log("api/content post");
    let { title, description, url, rating, tags, price, data } = req.body;
    const content = new Data({
        title: title,
        description: description,
        price: price,
        url: url,
        rating: rating,
        tags: tags,
        data: data,
    });

    const createdContent = await content.save();
    res.send(createdContent);
}
);

// create a get route that fitlers according to the tags
app.get('/api/content', async (req, res) => {
    console.log("api/content");
    const tags = req.query.tags.split(',');
    const contents = await Data.find({ tags: { $in: tags } });
    res.send(contents);
}
);

app.get("/all", async (req, res) => {
    console.log("all");
    const contents = await Data.find({});
    res.send(contents);
}
);

// create a route
app.get('/', (req, res) => {
    //    handle error
    res.send('Hello World');
}
);

// create a route

// listen on port 3000
app.listen(port, "0.0.0.0", () => console.log('Listening on port 3000...'));

// handle errors

// Path: package.json
// add a start script
