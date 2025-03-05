import express from "express"
import rateLimit from "express-rate-limit"

const app = express()

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max:10, 
    message: {message : 'Too many requests from this IP, please try again after 15 minutes'},
    headers: true, 
});

app.use(express.json());
app.use(limiter)


app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(7004, () => {
    console.log('connected to backend on port 7004')
})
