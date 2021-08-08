player1_Name=localStorage.getItem("Player1_Name");
player2_Name=localStorage.getItem("Player2_Name");
player1_score=0;
player2_score=0;
document.getElementById("Player1_Name").innerHTML=player1_Name+"=";
document.getElementById("Player2_Name").innerHTML=player2_Name+"=";
document.getElementById("Player1Score").innerHTML=player1_score;
document.getElementById("Player2_Score").innerHTML=player2_score;
document.getElementById("Player_question").innerHTML="Question Turn - " + player1_Name;
document.getElementById("Player_answer").innerHTML="Answer Turn - " + player2_Name;
function Send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log(word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    
    charAt2=word.charAt(3);
    console.log(charAt2);
 
    charAt3=word.charAt(5);
    console.log(charAt3);
    
    remove_charAt1=word.replace(charAt1 , "_");
    remove_charAt2=remove_charAt1.replace( charAt2 , "_");
    remove_charAt3=remove_charAt2.replace( charAt3 , "_");
    console.log(remove_charAt3)
    questionword="<h4 id= 'word_display'> Q. " + remove_charAt3 + "</h4>";
    inputbox="<br>Answer : <input type='text' id='input_checkbox'>";
    checkbutton="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    
 }
 questionturnn="player1";
answerturn="player2";
function check(){
   getanswer=document.getElementById("input_checkbox").value;
   answer=join(charAt1 + charAt2)
   console.log(answer)
if(answer == word){
   if(answerturn == "player1"){
      player1_score=player1_score + 1;
      document.getElementById("Player1Score").innerHTML=player1_score;
      console.log(player1_score)
   }
   else{
     player2_score=player2_score + 1;
     document.getElementById("Player2_Score").innerHTML=player2_score;
     console.log(player2_score);
   }
}
if (questionturnn == "player1"){
   questionturnn="player2"
   document.getElementById("Player_question").innerHTML="questionturn-" + player2_Name;
}
else{
  questionturnn="player1"
  document.getElementById("Player_question").innerHTML="questionturn" + player1_Name
}
if(answerturn== "player1"){
   answerturn="player2"
   document.getElementById("Player_answer").innerHTML="Answer Turn - " + player2_Name
}
else{
   answerturn="player1"
   document.getElementById("Player_answer").innerHTML="Answer Turn - " + player1_Name
}
document.getElementById("output").innerHTML=""

}
