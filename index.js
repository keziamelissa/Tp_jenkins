
const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/personnes', productRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to database. Server not started.');
});