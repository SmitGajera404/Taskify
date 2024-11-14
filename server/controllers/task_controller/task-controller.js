import Task from "../../models/Tasks/task.js"


export const addTask = async(req ,res) => {
    console.log(req.body);
    try{
        const newTask = new Task({
            task: req.body.task
        });
        await newTask.save();
        res.status(200).json({message: "Task added successfully" , newTask});
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Error on addding task"+error})
    }
}


export const deleteTask = async(req,res) => {
    try{
        await Task.findByIdAndDelete(req.body.id);
        res.status(200).json({message: "Task deleted successfully"})
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Error on deleting task" + err})
    }
}


export const updateTask = async(req, res) => {
    try {
        
        await Task.updateOne({_id:req.body.id},{$set:{task:req.body.text,Date:Date.now()}});
        res.status(200).json({message: "Task updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error on updating task" + error})
    }
}

export const getTasks = async(req,res) => {
    try{
        console.log(req.query);
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({message: error});
    }
}

export const updateStatus = async(req, res) => {
   try{
    await Task.updateOne({_id:req.body.id},{$set:{isDone:true}});
    res.status(200).json({message: "Task status updated successfully"});
   } catch (err) {
    console.log(err);
    res.status(500).json({message: "Error on updating status",err});
   }
}