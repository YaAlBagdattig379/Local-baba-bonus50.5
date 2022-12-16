const fruits = [ {name: 'pineApple'},{name:'mango'},{name: 'papaya'}]
const election = [ "razzak","alamgir",'jayed',"jayed","nepun","jayed"]
const election2 = {
    razzak:1,
    alamgir:1,
    jayed:4,
    nepun:1
}

// there way to  insert any value into object
// there way to  insert any value into object

const db = {};
const addToDb = (item) =>{ // there way to  insert any value into object
    // db.alom = 1 // method 1 to add any property value into object
    // db['alom'] = 1 // method 2 to add any property value into object
    db[item] = 1 // method 3 to add any property value into object 
    // db[item] = 1;
    console.log(db);
}
addToDb("item")