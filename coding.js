function names(){
    document.getElementById("question_turn").innerHTML = localStorage.getItem("Player1");
    document.getElementById("answer_turn").innerHTML = localStorage.getItem("Player2");
    document.getElementById("player_1_name_game").innerHTML = localStorage.getItem("Player1")+" : ";
    document.getElementById("player_2_name_game").innerHTML = localStorage.getItem("Player2")+" : ";
}
function send(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    question = "<h4 id='num_display'> Question. "+num1+" x "+num2+" = </h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}