function poem(){

    var poemContent = document.getElementById("poemContent");


    for (var i = 99; i > 0; i--){
    if (i>2){

        poemContent.innerHTML += ("<br />" +i + " bottles of beer on the wall, " + i + " bottles of beer \nTake one down and pass it around, " + (i-1) + " bottles of beer on the wall");
        
    } else if (i == 2) {

        poemContent.innerHTML += ("<br />" + i + " bottles of beer on the wall, " + i + " bottles of beer \nTake one down and pass it around, " + (i-1) + " bottle of beer on the wall");
        
    } else {

        poemContent.innerHTML += ("<br />1 bottle of beer on the wall, 1 bottle of beer");

        poemContent.innerHTML += ("<br />Take one down and pass it around, no more bottles of beer on the wall");
    }
    }

    poemContent.hidden = false;
}