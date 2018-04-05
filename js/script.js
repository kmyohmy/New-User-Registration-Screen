/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var processEntries = function () {
    "use strict";
	window.console.log("button clicked");
    var header, html, required, msg, email, phone, country, contact, terms;
    header = "";
    html = "";
    required = "<span>Required Fields.</span>";
    
    msg = "Please Review your entries and complete all Required Fields";
    email = $("email_address").value;
    phone = $("phone").value;
    country = $("country").value;
    contact = "Text";
	
    if ($("email").checked) {
        contact = "Email";
    } else if ($("none").checked) {
        contact = "None";
    }
    terms = $("terms").checked;
    //Basic Validation
    
    if (email === "") {
        email = required;
        header = msg;
        
    }
    if (phone === "") {
        phone = required;
        header = msg;
        
    }
    if (country === "") {
        country = required;
        header = msg;
        
    }
    if (terms === false) {
        terms = required;
        header = msg;
        
    }
    
    $("registration_header").innerHTML = header;
    if (header === msg) {
        
        html += "<tr><td> Email:</td><td>" + email + "</td></tr>";
        html += "<tr><td> Phone:</td><td>" + phone + "</td></tr>";
        html += "<tr><td> Country:</td><td>" + country + "</td></tr>";
        html += "<tr><td> Contact:</td><td>" + contact + "</td></tr>";
        html += "<tr><td> Terms:</td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_form").submit();
     
    }
};

var resetForm = function () {
    "use strict";
	window.console.log("button clicked");
    $("registration_info").innerHTML = "";
    $("registration_form").innerHTML = "";
    $("registration_header").innerHTML = "";
    $("email_address").focus();
};


window.document.addEventListener("load", function () {
    "use strict";
    $("register").addEventListener("click", processEntries);
    $("reset_form").addEventListener("click", resetForm);
    $("email_address").focus();
});