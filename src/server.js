import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

dotenv.config();
const port = process.env.PORT || 8888;

import route from './routes';

// App
const app = express();

// Static Files
app.use(express.static('src/public'));

// set the view engine to ejs
app.use(expressLayouts);
app.set('layout', './layouts/main-layout');
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'ejs');

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init route
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}: "http://localhost:${port}"`);
});
