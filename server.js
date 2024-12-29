require('dotenv').config();
const express = require('express');
const cors =require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const domainRoutes = require('./routes/domainRoutes');
const memberRoutes = require("./routes/memberRoutes");
const eventroutes = require("./routes/eventrout");



const app = express();

connectDB();
app.use(cors());

app.use(express.json());
app.use('/api/contact', contactRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/domain', domainRoutes);
app.use("/api", memberRoutes);
app.use("/api",eventroutes);



app.listen(5000, () => {
    console.log('Server running on port 5000');
});