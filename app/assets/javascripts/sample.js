function validateEmail(sEmail) {
2
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
3
    if (filter.test(sEmail)) {
4
        return true;
5
    }
6
    else {
7
        return false;
8
    }
9
}
One just need to make a call to this function to validate the email address. For demo, I have used on click event of button. But It can be used on blur event of textbox or any another event.
view sourceprint?
01
$(document).ready(function() {
02
   $('#btnValidate').click(function() {
03
        var sEmail = $('#txtEmail').val();
04
        if ($.trim(sEmail).length == 0) 
        {
05
            alert('Please enter valid email address');
06
            e.preventDefault();
07
        }
08
        if (validateEmail(sEmail)) {
09
            alert('Email is valid');
10
        }
11
        else {
12
            alert('Invalid Email Address');
13
            e.preventDefault();
14
        }
15
    });
16
});