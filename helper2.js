function displayAlert(alertText){
    favoriteMovie = "";
    do{
        favoriteMovie = prompt(alertText);
    }while(favoriteMovie == "");

    alert(favoriteMovie);
} 

function calcSum(num1, num2){
    alert(parseInt(num1) + parseInt(num2));
}

function displayLettersInName(fname){
    for (i = 0; i< fname.length; i++){
        alert(fname[i])
    }
}
