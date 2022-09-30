
//1.display number in textbox
var screen=document.getElementById('screen');


function displayNumber(num)
{
    screen.value += num;
}

//clear text box
function clearScreen()
{
    screen.value = "";
}

//evaluate expression

function evaluateExpression()
{
    expression=screen.value;
    output=eval(expression);
    screen.value=output;

}

//remove last item from test box

function removeLastItem()
{
    currentExpression=screen.value;
    screen.value=currentExpression.slice(0,-1);
}