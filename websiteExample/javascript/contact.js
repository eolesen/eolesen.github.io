$(document).ready(function()
{
    //enter in the function to be called when the button is clicked
    $("#contact").submit(function(event)
    {
        var name= event.target.name.value;
        Cookie.set("savedName", name);
        var usersName= Cookie.get("savedName");
        alert("Thank you " + usersName);
    });

});