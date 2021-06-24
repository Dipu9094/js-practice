var arr = [1,2,3,4,5]

function My_map(value,cb){
    var  newArr = []
    
    for(var i=0; i<arr.length;i++){
        var temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr

}

x = My_map(arr,function(value){
    return value * value * value
})

y = My_map(arr,function(value){
    return value * 10
})

z = My_map(arr,function(value){
    return value * value
})

console.log('Main array is : ' + arr);
console.log('Queb : '+ x);
console.log(y);
console.log('square is : '+ z);