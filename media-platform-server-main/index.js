const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())


app.listen(port, () => {
    console.log(`Own media server is running on `, port);
})

app.get('/', (req, res) => {
    res.send('own media server is running now')
})




// const uri = "mongodb+srv://<username>:<password>@cluster0.0y4d7qh.mongodb.net/?retryWrites=true&w=majority";




const uri = `mongodb+srv://${process.env.mediaDb}:${process.env.mediaPassword}@cluster0.0y4d7qh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    const postCollections = client.db('own-social-media').collection('posts')
    const userCollections = client.db('own-social-media').collection('users')
    const commentCollections = client.db('own-social-media').collection('comments')
    try {
        // post method 
        app.post('/users', async (req, res) => {
            const user = req.body
            // console.log(user)
            const result = await userCollections.insertOne(user)
            res.send(result)
        })
        app.post('/posts', async (req, res) => {
            const data = req.body
            // console.log(data, "from post post")
            const dataPosted = await postCollections.insertOne(data)
            res.send(dataPosted)
        })
        app.post('/comments', async (req, res) => {
            const data = req.body
            // console.log(data)
            const dataPosted = await commentCollections.insertOne(data)
            res.send(dataPosted)
        })

        // get method 
        app.get('/posts', async (req, res) => {
            const query = {}
            const post = await postCollections.find(query).sort({ _id: -1 }).toArray()
            res.send(post)
        })
        app.get('/myPosts', async (req, res) => {
            const email = req.query.email
            const query = { userEmail: email }
            const post = await postCollections.find(query).sort({ _id: -1 }).toArray()
            res.send(post)
        })
        app.get('/comments', async (req, res) => {
            const { id } = req.query
            const query = { postId: id }
            const comment = await commentCollections.find(query).sort({ _id: -1 }).toArray()
            res.send(comment)
        })
        app.get('/popularPosts', async (req, res) => {
            const popularPosts = await postCollections.find({}).limit(3).sort({ loveReact: -1 }).toArray()
            res.send(popularPosts)
        })


        // put method 
        app.put('/posts', async (req, res) => {
            const { id } = req.query
            const data = req.body
            const query = { _id: ObjectId(id) }
            const options = { upsert: true }
            const updateData = {
                $set: {
                    loveReact: data.countLove + 1
                }
            }
            const result = await postCollections.updateOne(query, updateData, options)
            res.send(result)
        })
    }
    catch {
        err => {
            console.log(err);
        }
    }
}
run().catch()