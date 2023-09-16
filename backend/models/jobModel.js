const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        trim:true,
        required:[true,"enter your name"],
        minlength:[3,"title must be more than 3 chareaters"],
        maxlength:[70,"title can't be exceed 70 chareaters"],
    },
    description:{
        type: String,
        required:[true,"enter your description"],
        trim:true,
        minlength:[10,"descriptoin must be more than 10 chareaters"],
        maxlength:[70,"descriptoin can't be exceed 70 chareaters"],
    },
    salary:{
        type: String,
        required:[true,"Salary is required"],
       trim:true,
    },
    location:{
        type:String,
    },
    available:{
        type:Boolean,
        default:true,
    },
    user:{
        type: ObjectId,
        ref:"User",
        required:true,
    },
    jobType:{
        type: ObjectId,
        ref:"JobType",
        required:true,
    },

  
},{timestamps:true})



module.exports = mongoose.model("Job",jobSchema);