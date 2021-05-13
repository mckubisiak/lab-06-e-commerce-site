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

}