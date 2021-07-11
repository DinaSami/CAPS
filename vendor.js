const events = require('./events');
require('./caps');
require('./driver');

let faker = require('faker');

let randomName;
let orderID;
let address;
let store;


let count=5;

const interval = setInterval(function () {
    count--;
    randomName = faker.name.findName();
    orderID = faker.datatype.uuid();
    address = faker.address.streetAddress();
    store = faker.company.companyName();
    console.log(events.emit('pickup', { store: `${store}`, orderID: `${orderID}`, customer: `${randomName}`, address: `${address}` })
    );
if (count===0) {
    clearInterval(interval)
}
}, 5000);






