//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide hints
$("form span").hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
    //find out if password is valid   
    if($password.val().length > 8) {
    //hide hint if valid
    $password.next().hide();
    } else {
    //else show hint 
    $password.next().show();
        
    }
}

function confirmPasswordEvent() {
   //find out if password and confirmation match
    if($password.val() === $confirmPassword.val()){
        $confirmPassword.next().hide();
} else {
    //hide hint if matched
    $confirmPassword.next().show();
        //else show hint 
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();






