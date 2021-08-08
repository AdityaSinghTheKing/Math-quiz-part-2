function Adduser(){
    player1_Name=document.getElementById("mytextinput1").value
    player2_Name=document.getElementById("mytextinput2").value
    localStorage.setItem("Player1_Name",player1_Name)
    localStorage.setItem("Player2_Name",player2_Name)
    window.location="mathquiz.html"
    }