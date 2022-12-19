//         *********A very simple way to add or remove key to an object*********  


// .1...  to add aside localStorage 
let db = {};
const addToDb = item =>{
    // to add  localStore
    const storedFriends = localStorage.getItem('friends');
    if(storedFriends){
        // console.log(typeof storedFriends)// object
        db = JSON.parse(storedFriends);
    }
    
    // add to db
    if(item in db){
        db[item] = db[item] + 1;
    }else{
        db[item] = 1;
    }
    localStorage.setItem('friends',JSON.stringify(db))
}
/* 
    upore ei take call kora hoache in browser console dev tool ekadik bar ekadin name .   
*/





// .2...  to remove item from localstorage
const removeItem = item =>{
    const storedFriends = localStorage.getItem("friends");
    if(storedFriends){
        const storedObject = JSON.parse(storedFriends);
        delete storedObject[item];
        localStorage.setItem('friends',JSON.stringify(storedObject))
    }
    // console.log(item);
}


/* 
upore ei take call kora hoache in browser console dev tool ekadik bar ekadin name to remove specefic item k 
 */
