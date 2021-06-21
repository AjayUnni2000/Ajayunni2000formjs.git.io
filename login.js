function validation()
	{
	var username=document.login.uname.value;
    	var password=document.login.psw.value;
    	if (username == "") {
            alert("Please enter your Username.");
            return false;
            }
    	if (password =="") {
            alert("Please enter your password");
            return false;
            }
          alert("Signing in");
   	 }