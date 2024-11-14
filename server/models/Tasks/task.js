import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        default:false
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})

const Task = mongoose.model('Task',taskSchema);

export default Task;