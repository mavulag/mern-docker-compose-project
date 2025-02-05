// Import mongoose package
import mongoose from 'mongoose'

// Initiate here..
const Schema = mongoose.Schema

// 
const Task = new Schema({
    // 
    name: {type: String, required: true},
    // time: {type: [String], required: true},
    description: {type: String, required: true}
}, {timestamps: true})

// 
export default mongoose.model('tasks', Task)