export const generateID=()=>{

    let date= new Date().getTime().toString(36);
    const randomNum=Math.random().toString(36).substring(2,10); 
    
    const uniqueID=date+randomNum; 
    
    return uniqueID; 

}    





