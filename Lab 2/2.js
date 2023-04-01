function validateForm(){
    var details=document.getElementById("name").value
    var phone=document.getElementById("mob").value
    var password=document.getElementById("pass").value
    var pass=password.length
    var mob=phone.length
    var person=details.length
    var pattern = /[0-9]/g;
    var numvalidator=details.match(pattern)
    if(person<3 || mob<10 || pass<6){
        alert("minimum required")
    }
    else if(numvalidator!=null){
            alert("Numrics are not Allowed in Name Field")
        }
    }

