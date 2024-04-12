require("dotenv/config");
const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', Number(process.env.PORT) || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/v1',require('./routes/index.routes'));

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

