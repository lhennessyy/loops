var total = 0;
var compwin = 0;
var humanwin = 0;
var draw = 0;
var prevguess = 0;
var computerchoice = 0;

function userSubmit(){
    
    if(total < 3){
    //increment the amount of games played
    total ++;

       
    //Ensure that computer does not have the same guess twice.
    while(computerchoice == prevguess){    
        computerchoice = Math.floor(Math.random() * 3) + 1;
    }
    
    prevguess = computerchoice;

    //getting users choice
    var choice = document.getElementById("rps-select").value;

    //Display the users image
    userDisplayChoice(choice);
    //Display the computers image
    computerDisplayChoice(computerchoice);
    //Find the winner
    findWinner(choice, computerchoice);

    if(total == 3){

        console.log(compwin + " " + humanwin + " " + draw)
        if(compwin > humanwin){
            document.getElementById("overall").innerText += "Computer!"
        }else if(humanwin > compwin){
            document.getElementById("overall").innerText += "Human Player!"
        }else{
            document.getElementById("overall").innerText = "Draw!"
        }

        document.getElementById("overall").hidden = false;
        document.getElementById("gameOver").hidden = false;
        document.getElementById("masterdiv").style.opacity = "0.1";
        document.getElementById("masterdiv").style.color = "black";
        document.getElementById("play").disabled = true;


    }
    

    }
    

}



function userDisplayChoice(choice){

    if(choice == 1){
        document.getElementById("humanPick").src="./images/rock.png";
    }
    else if(choice == 2){
        document.getElementById("humanPick").src="./images/paper.png";
    }
    else{
        document.getElementById("humanPick").src="./images/scissors.png";
    }

    document.getElementById("humanPick").hidden = false;
}

function computerDisplayChoice(computerchoice){

    if(computerchoice == 1){
        document.getElementById("computerPick").src="./images/rock.png";
    }
    else if(computerchoice == 2){
        document.getElementById("computerPick").src="./images/paper.png";
    }else{
        document.getElementById("computerPick").src="./images/scissors.png";
    }
    document.getElementById("computerPick").hidden = false;
}


function findWinner(choice, computerchoice){

    var winner = document.getElementById("winner");
    winner.innerText = "";

    if(choice==1 && computerchoice==3){
        winner.innerText = "User wins!"
        humanwin++;
    }
    else if(choice==3 && computerchoice==1){
        winner.innerText = "Computer wins!"
        compwin++;
    }
    else if(choice==2 && computerchoice==1){
        winner.innerText = "User wins!"
        humanwin++;
    }
    else if(choice==1 && computerchoice==2){
        winner.innerText = "Computer wins!"
        compwin++;
    }
    else if(choice==3 && computerchoice==2){
        winner.innerText = "User wins!"
        humanwin++;
    }
    else if(choice==2 && computerchoice==3){
        winner.innerText = "Computer wins!"
        compwin++
    }
    else{
        winner.innerText = "Draw!"
        draw++;
    }

    document.getElementById("winner").hidden = false;

    document.getElementById("computerSelect").hidden = false;
    document.getElementById("humanSelect").hidden = false;


}





