//the data from textbox
var inputText = document.getElementById ("text");
var output = document.getElementById("outputCard");
var Create = document.getElementById("create");
var string = " ";

// function  when click create
Create.addEventListener ("click", function(){
   if (inputText.value===""){
   	   alert ("write any text and then click create")
   }
   	else {
	// create a string that will hold the cards.
	  	string = " ";
        string = `<div class="output" > ${inputText.value} 
    		 <button class = "dBtn">Delete</button></div>`
	    output.innerHTML += string;
	}
});

//function for the delete button 
document.body.addEventListener("click",function(event){
	if (event.target.className ==="dBtn"){
		event.target.parentNode.remove();
	}
})
