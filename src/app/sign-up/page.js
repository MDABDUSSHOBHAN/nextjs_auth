'use client'

import { Label } from "@radix-ui/react-label";
import { formControls, innitialstate } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { registerUserAction } from "@/action";
// this is not for user invalid import ///
import { redirect } from 'next/navigation'

function SignUp() {

   // const router = useRouter()
   
    const [signUpFormData,setSignUpFormData] = useState(innitialstate);

   
    console.log(signUpFormData);
  

   //  function handleSignUpBtnValid() {
   //        return Object.keys(signUpFormData).every(key => signUpFormData[key].trim() !== '');

   //  }

   //  this is for emplent sign up page....
   async function handelsignup(){


      const result = registerUserAction(signUpFormData);
      console.log(result);
      if(result){

         // router.push()
         redirect("/sign-in")
      }

   }
    



    return <div>
    
    <h3>Registration </h3>




    <form action={handelsignup}>


          {
             formControls.map( controlItem =>
                <div key={controlItem.name}>
                    <Label>{controlItem.lable}</Label>


                    <CommonFormElement 
                    
                    
                     controlItem={controlItem}
                     value ={signUpFormData[controlItem.name]}

                     onChange={(event) =>setSignUpFormData({

                          ...signUpFormData,

                          [event.target.name] :event.target.value,


                     })}

                     
                     
                     
                     
                     />

                </div>
             )
          }
            {/* <Button disabled={!handleSignUpBtnValid()} className="opacity-65" type="submit" >Sign Up </Button> */}
        
            <Button   type="submit" >Sign Up  </Button>




    </form>


    </div>;
}

export default SignUp;