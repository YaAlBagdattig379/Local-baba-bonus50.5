// exaple of add to object by function and normally 
const db = {};
const addToDb = (item) =>{
    // db.alom = 1 // method 1 to add any property value into object
    // db['alom'] = 1 // method 2 to add any property value into object
    if(item in db){
       db[item] = db[item] + 1 // method 3 to add any property value into object 
    }else{
       db[item] = 1 // method 3 to add any property value into object 
    }
}
// addToDb("item")