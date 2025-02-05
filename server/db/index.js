// Import mongoose package
import mongoose, { mongo } from "mongoose"

// Initiate connection here..
mongoose.connect('mongodb://127.0.0.1:27017/task')
.catch(e => {
    console.error('Connection error', e.message)
})

const db = mongoose.connection

export default db