//checking that the js file is linked to HTML
console.log("firebase.js ready to roll!")

//connect to the firebase db (database)
  var config = {
    apiKey: "AIzaSyDqCowWm_tfPP6BlQZIWiRCWzSwsD1dnFM",
    databaseURL: "https://dynamic-web-template-e91d4.firebaseio.com"
  };
  firebase.initializeApp(config);

//this is the whole database
var database = firebase.database();

//we want to grab only the 'products' part of the db
//ref=reference like path for files on computer
var productsData = database.ref('products');

//create a list of people
var productsList = []; //empty list, for now

//load all the children of 'products'
//keep listening for new children
productsData.on('child_added', function(childData){
    //run these instructions for each child
    console.table( childData.val() );
    var product = childData.val(); //extract data about the product
    productsList.push( product ); //add the product to the productsList
})