'use client'


import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userLoginFormControls } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loginUserAction } from "@/action";
import { redirect } from "next/navigation";





function SignUp() {


    const [loginFormData,setLoginFormData] = useState(initialSignUpFormData);
    console.log(loginFormData)
async function handelSignIn(){

    const result = await loginUserAction(loginFormData);
    console.log(result)
    // redirect method will apply here....

    if(result){

        redirect("/")
    }


    


}

    return <div>
    
    <h3>Login </h3>
    {/* This is emplement sign in mehod .... */}
    <form action={handelSignIn}>

    {
             userLoginFormControls.map( controlItem =>
                <div key={controlItem.name}>
                    <Label>{controlItem.lable}</Label>


                    <CommonFormElement 
                    
                    
                     controlItem={controlItem}
                     value ={loginFormData[controlItem.name]}

                     onChange={(event) =>setLoginFormData({

                          ...loginFormData,

                          [event.target.name] :event.target.value,


                     })}

                     
                     
                     
                     
                     />

                </div>
             )
          }
      <Button   type="submit" >Submit  </Button>

       </form>


    </div>;
}

export default SignUp;