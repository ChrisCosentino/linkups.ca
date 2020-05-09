const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path'); 


const links = require('./routes/api/links');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({credentials: true, origin: true}));

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;


// app.use(express.static(path.join(__dirname, 'client/build')));


// if(process.env.NODE_ENV === 'production') {  
//     app.use(express.static(path.join(__dirname, 'client/build')));  

//     app.get('*', (req, res) => {   
//        res.sendfile(path.join(__dirname = 'client/build/index.html')); 
//      })
// }else{
//     app.get('*', (req, res) => { 
//         res.sendFile(path.join(__dirname+'/client/public/index.html'));
//    })
// }

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));



app.use('/api/links', links);


// if(process.env.MODE_ENV === 'production'){
//     app.use('/', express.static( 'client/build' ));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
//     })
// }

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Server started on port ${port}`));