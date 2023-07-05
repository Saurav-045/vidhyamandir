import express from "express";
import User from "../model/User.js";

export const addUser = async(req,res)=>{
    const {name, email, phonenumber, occupation, hometown} = req.body;
    try{
  const newUser = await User.create(req.body);
  await newUser.save();
  return res.status(200).json(newUser);
    } catch(error){
        console.log(error);
    }
}

export const getUser = async(req,res)=>{
  try{
const user = await User.find();
return res.status(200).json(user);
  } catch(error){
      console.log(error);
  }
}


