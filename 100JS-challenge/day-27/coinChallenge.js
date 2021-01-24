function coins(price){
    let originalPrice=price;
    
    price = price/.25
    let q = Math.floor(price)
    price = ((price-q)/price)*originalPrice

    price=price/.10;
    let d = Math.floor(price)
    price = ((price-q)/price)*originalPrice

    price=price/.05;
    let n = Math.floor(price)
    price = ((price-q)/price)*originalPrice
    
    price=price/.05;
    let p = Math.floor(price)
    price = ((price-q)/price)*originalPrice


    
 return [q,d,n,p]
}

console.log(coins(3.99))