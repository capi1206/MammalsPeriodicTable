const express = require('express');
const routes = require('./routers/species.js');
const mongoose = require('mongoose');
const cors = require('cors');


const CONNECTION_URL='mongodb+srv://capi1206:1%40Holywars@cluster0.wpt1f.mongodb.net/?retryWrites=true&w=majority';

const PORT=3000;

mongoose.connect(CONNECTION_URL,   {useNewUrlParser: true, 
                                    useUnifiedTopology: true
                                    })
                                    .then(db => console.log('DB is connected'))
                                    .catch(err => console.log(err));


const db = mongoose.connection;
db.on('error', err => console.error(err));
const app = express();
app.use(cors());
app.use(express.json());
app.use('/species', routes);

app.listen(PORT, ()=>console.log('listening on port '+PORT));