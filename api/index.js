import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors())
server.use(express.json())

const tweets = []
const users = []
let user =""


server.get("/tweets", (req, res) => {
    let lastTweets = [...tweets].reverse()
    if (tweets.length > 10){
        lastTweets = [...tweets].reverse().slice(0,10)
    }
    

    res.send(lastTweets);
})

server.post("/tweets", (req, res) => {

    const finalTweet = {
        username: user.username,
        avatar: user.avatar,
        tweet: req.body.tweet
    }
    

    tweets.push(finalTweet)
    res.send("Ok")
})

server.post("/sign-up", (req, res) => {
    const novoSignUp = req.body
    user = req.body

    users.push(novoSignUp)
    
    res.send("Ok")
})


server.listen(5000, () => console.log("Listening on port 5000"))
