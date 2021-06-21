function validation()
	{
	var firstname=document.registration.fname.value;
	var lastname=document.registration.lname.value;
	var Dob=document.registration.dob.value;
	var Gender=document.registration.gender.value;
	var Address=document.registration.address.value;
 	var Email=document.registration.email.value;
	var phone=document.registration.phnum.value;
	var username=document.registration.uname.value;
    	var password=document.registration.psw.value;
	var repassword=document.registration.pswrepeat.value;
    	if (firstname == "") {
            alert("Please enter your First Name.");
            return false;
            }
	if (lastname == "") {
            alert("Please enter your Last Name.");
            return false;
            }
	if (Dob == "") {
            alert("Please enter your Date of Birth.");
            return false;
            }
	if (Gender == "") {
            alert("Please enter your Gender.");
            return false;
            }
	if (Address == "") {
            alert("Please enter your Address.");
            return false;
            }
	if (Email == "") {
            alert("Please enter your Email Id.");
            return false;
            }
	if (phone == "") {
            alert("Please enter your Phone Number.");
            return false;
            }
	if (username == "") {
            alert("Please enter your Username.");
            return false;
            }
    	if (password =="") {
            alert("Please enter your password");
            return false;
            }
	if (repassword == "") {
            alert("Please repeat Password.");
            return false;
            }
	if (repassword != password) {
            alert("Passwords are not same.");
            return false;
            }
          alert("Registration Succesfull");
   	 }