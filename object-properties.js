var computer = {
    price: 29000,
    storage: '156gb',
    processor: 'intel i5',
    color: 'silver'
}
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;

// set a object property value 
computer.price = 22000;
// console.log(computer);
// console.log(computerPrice);


// different ways to set a value of an object property 

var priceProperty = "price"
computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 24000;



var StorageProperty = 'storage';
computer[StorageProperty] = '512gb';

computer['storage'] = '1tb';

computer.storage = '5tb';

console.log(computer);