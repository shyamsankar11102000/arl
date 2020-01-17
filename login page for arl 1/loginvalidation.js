
function validate(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username=="aakash" && password=="shyam")
	{
		alert ("login successful");
		return false;
	}
	else{
		alert("Login unsuccessful")
	}
}