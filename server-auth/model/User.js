import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber :{
    type : Number,
    required : true,
  },
  occupation : {
    type : String,
    required : true
  },
  hometown : {
    type : String,
    required : true
  }
});

export default mongoose.model("user", userSchema);
