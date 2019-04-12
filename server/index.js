const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');

const app = express();


app.use(cors());
app.use(body_parser.json());

const posts = require('./routes/api/posts.js');
app.use('/api/posts',posts);

if (process.env.NODE_ENV === 'production'){
    
    app.use(express.static(__dirname + '/public/'));

    app.get( /.*/ , ( req , res ) => res.send( __dirname + 'public/index.html'));

}

app.listen(4000, () => {console.log("Server is running...")});