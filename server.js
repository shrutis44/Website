require('dotenv').config();
const express = require('express');
const cors =require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const domainRoutes = require('./routes/domainRoutes');
const memberRoutes = require("./routes/memberRoutes");
const eventroutes = require("./routes/eventrout");
const rateLimit = require('express-rate-limit');


const app = express();

// const contactRateLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 5, 
//     message:{ 
//         success:false,
//         messagr:'Too many requests from this IP, please try again after 15 minutes.'
//     }
// });

connectDB();
app.use(cors());

app.use(express.json());
app.use('/api/contact',contactRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/domain', domainRoutes);
app.use("/api", memberRoutes);
app.use("/api",eventroutes);
//app.use('/api/contact', contactRateLimiter);



app.listen(5000, () => {
    console.log('Server running on port 5000');
});