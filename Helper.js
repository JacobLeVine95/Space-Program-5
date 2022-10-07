function myAlert(){
    //alert("this code is located in a seperate js file.")

    //for loop will run 5 times
    //for(i =0; i <3; i++){
        // //alert will show the counter value
        // alert("i=" + i);

        //}
}

//This function created a countdown.
function countdownCode(pageElement){
    var countdown = 10;    
    pageElement.innerHTML = countdown;
    countdown = countdown -1;

//This shows 'Blastoff!' at the end of the count down.
     setTimeout(function(){
        pageElement.innerHTML = "Blastoff!";
        countdown = countdown -1;
    }, 9000);

    setTimeout (function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    }
        countdown = countdown -1;
    }, 8000);

    setTimeout(function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    }
        countdown = countdown -1;
    }, 7000);

    setTimeout(function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    }
        countdown = countdown -1;
    }, 6000);

    setTimeout(function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    }
        countdown = countdown -1;
    }, 5000);

    setTimeout(function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    } 
        countdown = countdown -1;
    }, 4000);

    setTimeout(function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    }
    //This starts the warning that you're less than halfway through the countdown.
        countdown = countdown -1;
    }, 3000);

    setTimeout(function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    }
        countdown = countdown -1;
    }, 2000);

    setTimeout(function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    }
        countdown = countdown -1;
    }, 1000);
//This decreases the countdown by 1.
    setTimeout(function(){
        if(countdown <= 5){
            pageElement.innerHTML = "Warning Less than ½ way to launch, time left = "+ countdown +" seconds left.";
        } 
        else{   
        pageElement.innerHTML = countdown;
    }
        countdown = countdown -1;
    }, 0000);

}

//This function runs the "Mission Control Login" function.
function MCL(){
    firstName = prompt("First name:");
    lastName = prompt("Last name:");
    fullName = firstName + " " + lastName;
//These prompts ask for the first and last name
    while(fullName.length > 20){
        alert("Please re-enter less than 20 characters."); 
//This while statement loops the function so that if the concatenated name is >20, it will give a warning to re-enter.
        firstName = prompt("First name:");
    lastName = prompt("Last name:");
    fullName = firstName + " " + lastName;
    }

    badgeNumber = prompt("Badge number:");
    //This prompt asks for badge number
    while(badgeNumber > 1000){
       badgeNumber = prompt("Please input a 3 digit code."); //This while statement will give an alert asking for a 3-digit code if you put 4 digits or more in.
    }
}

function displayAlert(alertText){
    alert(alertText);
} //This function allows the alertText to run the buttons on the page.

function startClicked() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stopClicked() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}