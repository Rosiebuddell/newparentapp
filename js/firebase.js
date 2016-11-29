//checking that the js file is linked to HTML
console.log("firebase.js ready to roll!")

//connect to the firebase db (database)
//  var config = {
//    apiKey: "AIzaSyBN1dnlfox02roXWg7ChibcegRaIjjf5iA",
//    databaseURL: "new-parent-app.firebaseapp.com",
//  };
//  firebase.initializeApp(config);
var config = {
    apiKey: "AIzaSyBN1dnlfox02roXWg7ChibcegRaIjjf5iA",
    authDomain: "new-parent-app.firebaseapp.com",
    databaseURL: "https://new-parent-app.firebaseio.com",
    storageBucket: "new-parent-app.appspot.com",
    messagingSenderId: "925310505884"
  };
  firebase.initializeApp(config);

//this is the whole database
var database = firebase.database();

//we want to grab only the 'products' part of the db
//ref=reference like path for files on computer
var productsData = database.ref('products');

//create a list of items
var itemList = []; //empty list, for now

//load all the children of 'products'
//keep listening for new children
productsData.on('child_added', function(childData){
    //run these instructions for each child
    console.table( childData.val() );
    var product = childData.val(); //extract data about the product
    itemList.push( product ); //add the product to the itemList
})

