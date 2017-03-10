
var activeOperation = "add"; //Can be 'add' or 'substract'.
var stack = []; //The array of all the numbers to be added (substractions are negative)
var trackedTotal = 0; //This is a temporary store of the total.
//var total = 0; //Starts from 0.


function OnStart()
{
    //Set active operation to add
    SetOperation('add');
    //Set screen to 0
    $('#mc-screen').text(0);
}

/*
    Pushes elements to the stack.
*/
function Push(number)
{
    var multiplier;

    if (activeOperation == 'add')
    {
        multiplier = 1;
    }
    if (activeOperation == 'substract')
    {
        multiplier = -1;
    }

    stack.push(number * multiplier);

    trackedTotal += number * multiplier;
    console.log('trackedTotal = ' + trackedTotal);
    Update(trackedTotal);
}

/*
    Updates the screen with the given number.
*/
function Update(number)
{
    $('#mc-screen').text(number);
}

$(function() {
    OnStart()
});
