// Import required packages here..
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Import db connection here..
import db from './db/index.js'

// Import router here..
import taskRouter from './routes/task-router.js'

// Initiate express here..
const app = express()

// Initiate api port here..
const apiPort = 5000

// Initiate Middleware here..
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

// Initiate db connection here..
db.on('error',console.error.bind(console, 'MongoDB connection error:'))

// Initiate routing here..
app.get("/", (req,res) => {
    res.send("Hello World!")
})

// 
app.use("/api", taskRouter)

// Initiate app here..
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))