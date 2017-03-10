/*
    Sets the operation to add or substract.
    Accepts strings 'add' or 'substract'.
*/
function SetOperation(operation)
{
    if (operation == 'add')
    {
        activeOperation = "add";
        AddActive();
    }
    if (operation == "substract")
    {
        activeOperation = "substract";
        SubstractActive();
    }
}

function AddActive()
{
    console.log('Adding');
    $('#mc-add-key').text('add_circle');
    $('#mc-substract-key').text('remove');

}

function SubstractActive()
{
    console.log('Substracting');
    $('#mc-add-key').text('add');
    $('#mc-substract-key').text('remove_circle');
}

/*
    Undo last operation using the last element of the stack.
*/
function Undo()
{
    trackedTotal = trackedTotal + (stack[stack.length] * -1);
    Update(trackedTotal);
}

function Clear()
{

}
