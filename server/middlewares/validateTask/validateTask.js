

export const validateIsEmpty = (req,res,next) => {
    if(req.body.task){
        return res.status(400).send({message: "Task cannot be empty"})
    }else{
        next()
    }
}