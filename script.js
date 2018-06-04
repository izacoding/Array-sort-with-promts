function getFormValue() {
// =======================	
// Step 1 = Output
// Put Fruits in a Array function

// =======================


     var Fruits = ["Apple","Orange","Kiwi"];

   
    

    
// ====================================
// // Step 2 = process
// // prompt your fruits in a variable
// ====================================
	var Order = prompt('Enter Your Fruits');

	Fruits.sort();
	



// =================================
// Step 3 =output
// Log out your order in the prompt
// =================================   
   
     user = document.getElementById('Fruits').innerHTML = ("An Order Of" +  " " +  Fruits.join (" with ")) ;

    
     
};
