import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
app.use(cors(
    {
        // origin: process.env.CORS_ORIGIN|| 'http://localhost:3000',
    origin: process.env.CORS_ORIGIN,
    credentials: true, // Allow cookies to be sent with requests
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    }
));

app.use(express.json({
limit:"16kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(express.static("public"));
app.use(cookieParser());

export {app}