

import express from 'express';
// import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import cookieParser from 'cookie-parser'

//own file import
import router from './src/routes/api.js';
const app=express();




// Middleware implementation.
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());

const limiter =rateLimit({
   windowMs:15*60*1000, 
   max:3000
});
app.use(limiter);


//Disable Response Cache (if frequently change the data, that time we should disable the cache)
app.set('etag', false);


//request size limit :
app.use(express.json({limit:'200MB'}));
app.use(express.urlencoded({ extended: true, limit: '200MB' })); // Set `extended` option


//Database connection
// mongoose.connect('',{autoIndex:true});


//Api Route Connect
app.use('/app',router);

export default app;