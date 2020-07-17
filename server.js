require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

const posts = [
    {
        username: 'Amka',
        title: 'Post 01'
    },
    {
        username: 'George',
        title: 'Post 02'
    }
];

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter( post => post.username === req.user.name ));
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    // check if header has token get second part, if not sends back undefined
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.sendStatus(401); // Token is not arrived

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err);
        if(err) return res.sendStatus(403); // Token is no longer valid
        req.user = user;
        next();
    })
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('Listening on port ' + PORT));