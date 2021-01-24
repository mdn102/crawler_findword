function addTwo( arr, total){
    const arr2 = [];
    for(let i of arr){
        for(let j of arr){
        if(i+j === total){
            arr2.push(i)
            arr2.push(j)
        } else {
           return  false
        }
    }}
}

console.log(addTwo([1,2,3],5))