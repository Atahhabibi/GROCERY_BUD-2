import { getElement } from "./getElement.js";

const hightLightDOM = getElement(".highlights");


export const showHighLight=(message,status)=>{

    hightLightDOM.innerHTML = message; 
    hightLightDOM.classList.add("show-highlight");
    

    if(status==="success"){
        hightLightDOM.style.backgroundColor="#9be18d"; 
        hightLightDOM.style.color="black"; 

    }
    if(status==="failure"){
        hightLightDOM.style.backgroundColor="#df9a9a"; 
        hightLightDOM.style.color="black"; 

    }
    
    setInterval(() => {
      hightLightDOM.classList.remove("show-highlight");
    },3000);
    
}