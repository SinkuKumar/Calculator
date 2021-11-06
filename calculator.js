//Question Pop-up in html with closing option

var terminal = document.getElementById('terminal');


//Backspace
function backspace(){
    navigator.vibrate(100);
    terminal.value = terminal.value.slice(0, -1);
}

//Evaluate Result
function calculate() {
    navigator.vibrate(200);
    var expression = terminal.value;
    try{
        let result = eval(expression);
        console.log(result);
        terminal.value = result;
    } catch(error){
        terminal.value = "Invalid Expression !"
    }
}

//Clear screen
function clearScreen() {
    navigator.vibrate(150);
    terminal.value = "";
}

//Button Input
function input(num){
    terminal.value += num;
    navigator.vibrate(50);

}