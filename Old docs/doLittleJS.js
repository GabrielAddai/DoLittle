function unameValidator() {
    var uname_o = document.forms["myForm"]["username"].value;
    if (uname_o.length < 6) {
        window.alert("Username must be at least 6 characters long");
        return false;
    }
    if (uname_o.length > 24) {
        window.alert("Username must be at less than 24 characters long");
        return false;
    }
    return true;
}

function passValidator() {
        var pass_o = document.forms["myForm"]["password"].value;
        var pass_v = document.forms["myForm"]["v_password"].value;

        if (pass_v != pass_o) {
            window.alert("Ensure passwords match");
            return false;
        }
        return true;
    }