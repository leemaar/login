function validate(){
var email= doucument.form.email.value;

if (email==""){
    printError("emailErr","Please enter your email address");
    elem= document.geiElement.Id("email");
    elem.classlist.add("input-2");
    elem.classlist.romove("input-1");

}else{
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false){
    printError("emailErr", "please enter a avalid email");
    elem= document.getElementbyId("email");
    elem.classlist.add("input-2");
    elem.classlist.romove("input-1");

    
}else{
        printError("emailErr", "")
        emailErr = false;
        var elem= document.getElementbyId("email");
        elem.classlist.add("input-2");
        elem.classlist.romove("input-1");

        if(emailErr== true){
            return false;
        }

}

    function checkPassword(form) {
        password1 = form.password1.value;
        password2 = form.password2.value;
    }
    alphatdigit=0;
    alpha=/[a-zA-Z]/;
    digit=/[0-9]/;
        // If password not entered
        if (password1 == ''|| password1.lenght<7){
            alert ("Please enter Password");
            return false;
        }
        // If confirm password not entered
        else if (password2 == ''|| password2.lenght<7){
            alert ("Please enter password");
            return false;
        }
              
        // If Not same return False.    
        else if (password1 != password2) {
            alert ("\nPassword did not match: Please try again...")
            return false;
        }
        
        else if(pass.match(alpha)&&pass.match(digit))
        alphadigit=1;
        
        if (alphadigit==0)
        {
            alert("please enter a valid password")
            return false;
        }

        // If same return True.
        else  {
            alert("Password Match: Welcome!")
            return true; 
        } 
        {
            alert("sucesful validation")
            return true;
        }
    }
}