function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="admin" && password=="user")
    {
        alert("SuccessfullY LoggedIn");
        return true;
    }
    else
    {
        alert("Failed LoggedIn");
        return false;
    }
}
