"use server";

import connectToDB from "@/database";
import User from "@/models";
import bcrypt from "bcrypt";
var jwt = require('jsonwebtoken');

import { cookies } from "next/headers";

export async function registerUserAction(formData){

    await connectToDB();

    try{

       const {userName,email,password} = formData;

       const checkUser = await User.findOne({email});
       if(checkUser){

        return{

            success:false,
            message:'user already exists'

        }
       }

   const salt = await bcrypt.genSalt(10);    
   const hashpassowrd =  await bcrypt.hash(password,salt);
   const newlyCreateUser = new User({

    userName,
    email,
    password: hashpassowrd,
    // haspossoard:!paswore
   })
const savedUser = await newlyCreateUser.save();
if(savedUser){
    return {

        success:true,
        data:JSON.parse(JSON.stringify(savedUser))
    }
   
}
else{
   
        return {
           
            message:'can not add data',
            success:false,


        };
       
}

    }catch(error){
        console.log(error);
        return {
           
            message:'somthing went wrong please try again',
            success:false,


        };
    }
}


// This section is for login section ...

export async function loginUserAction(formData){

    await connectToDB();

    try{

        const {email,password} = formData;

        const checkUser = await User.findOne({email});

        if(!checkUser){
           

            return{
                message:'User doennote exist please try again',
                success:false,
            }
        }


    const checkPassword = await bcrypt.compare(password,checkUser.password);

    if(!checkPassword){
        return{
            message:'password is incorrect',
            success:false,
        }
    }

    // Here i will create token data..
    const createTokenData = {
        id: checkUser._id,
        userName: checkUser.userName,
        email: checkUser.email
    }

    const token = jwt.sign(createTokenData,"DEFAULT_KEY",{expiresIn: '1d'})

     const getCookies = cookies();
     getCookies.set('token',token);

     return {
        success:true,
        message:'Login Success',
     }
    




    }catch(error){
        console.log(error);
        return {
            message:'somthing went wrong please try again',
            success:false,
        }
    }


}



// this is the user atuhinging for data 

export async function fetchAuthUserAction(){

    await connectToDB();

 try{

    const getCookies = cookies();

    const token = getCookies.get("token")?.value || "";


    if(token === ""){

        return {

            success:false,
            message:"Token is invalid",

        };

    }
    const decodedToken = jwt.verify(token,'DEFAULT_KEY');

    const getUserInfo = await User.findOne({_id:decodedToken.id})

    if(getUserInfo){

        return {

            success: true,

            data: JSON.parse(JSON.stringify(getUserInfo))

        }
    }
    else {

        return {
       
            message:'Data Not Found',
            success:false,
    
    
        };
    }


 }
 catch(error){
    console.log(error);
    return {
       
        message:'somthing went wrong please try again',
        success:false,


    };
}




}



