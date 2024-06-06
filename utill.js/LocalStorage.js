

 export const setItemToStorage=(items)=>{

    localStorage.setItem('list',JSON.stringify(items)); 

}

export const getItemsFromStroage=()=>{
    let items=localStorage.getItem('list'); 

    if(items){
        items=JSON.parse(items); 
        return items; 
    }else{
        return []; 
    }
}




