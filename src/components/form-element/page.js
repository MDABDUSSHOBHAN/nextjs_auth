import { Input } from "../ui/input";


function CommonFormElement({controlItem,value,onChange}) {
 
 

 let   content = null;

 switch(controlItem){

    case 'input':

     content = <Input
      

       name={controlItem.name}
       id={controlItem.name}
       placeholder={controlItem.placeholder}
      
       type = {controlItem.type}
       
       value={value}
       onChange={onChange}
      
       
    
     
     
     
     />

       break;


    default:
        content = <Input
     
        name={controlItem.name}
        id={controlItem.name}
        placeholder={controlItem.placeholder}
        type = {controlItem.type}
        value={value}
        onChange={onChange}
      
      
      
      />
        break;

 }


    

    return content

        
   
}

export default CommonFormElement;