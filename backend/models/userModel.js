const mongoose=require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add name"],
    },
    email:{
        type:String,
        required:[true,"please add email"],
        unique:[true,"duplicate not allowed"],
    },
    password:{
        type:String,
        required:[true,"please add password"],
    },
  },
  {
    timestamps:true,
  }

);

module.exports=mongoose.model("User",userSchema);