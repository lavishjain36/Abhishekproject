//create a random no with math function
var y=  Math.floor(Math.random()*100+1);
//to guess the no of times  to judge that number
var guess=1;
document.getElementById("submitguess").onclick=function(){
//user entered number
var x= document.getElementById("guessField").value;
if(x==y)
{
    alert("Congratulations!! You have got the number " + guess + " times ." )
}
else if(x>y)
{
    guess++;
    alert("Sorry!! Try a smaller number");
}
    else {
    guess++;
    alert("Sorry!! Try a larger number");
}
}