function data()
{
    var result
    var fnumber=Number(document.getElementById("fnumber").value);
    var snumber=Number(document.getElementById("snumber").value);
    var op=document.getElementById("op").value
    switch (op) {
        case '+':
            result=fnumber+snumber
            break;
        case '-':
            result=fnumber-snumber
            break;
        case '*':
            result=fnumber*snumber
            break;
        case '/':
            result=fnumber/snumber
        default:
            break;
    }
    document.getElementById("result").innerHTML=result
}