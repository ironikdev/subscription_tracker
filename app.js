import express from "express";
import cookieParser from "cookie-parser";
import {PORT } from './config/env.js'
import authRouter from './routes/auth.routes.js';
import subscriptionsRouter from './routes/subscriptions.routes.js';
import userRouter from './routes/user.routes.js';
import connectToDatabase from "./Database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from './routes/workflow.routes.js';

const app = express();
app.use(express.json());
app.use(arcjetMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionsRouter);
app.use('/api/v1/workflows', workflowRouter);
app.use(errorMiddleware);
app.get("/",(req,res)=>{
    res.send("welcome");
});
app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});

await connectToDatabase();

export default app;