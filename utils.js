export function findById(someArray, id) {
    for (let item of someArray) {
        if (id === item.id){
            return item;
        }
    }
}

export function reload(){
    var container = document.getElementById('refresh');
    var content = container.innerHTML;
    container.innerHTML = content; 
    
   //this line is to watch the result in console , you can remove it later	
    console.log('refreshed'); 
}