function display(a) {
    let val = document.getElementById('result').innerHTML;
    if (val == "MATH ERROR!"||val == "SYNTAX ERROR!")
        document.getElementById('result').innerHTML = a;
    else
        document.getElementById('result').innerHTML += a;
}
function cls() {
    document.getElementById('result').innerHTML = '';
}
function calc() {
    let x = document.getElementById('result').innerHTML;
    if (x == '')
        alert("Enter something....");
    else {
        try {
            let y = eval(x);
            let t = String(y);
            if(t== "infinity" || t=="NaN")
                y = "MATH ERROR!";
            document.getElementById('result').innerHTML = y;
        }
        catch (e) {
            document.getElementById('result').innerHTML = "SYNTAX ERROR!";
        }
    }
}
function del() {
    let x = document.getElementById('result').innerHTML;
    if (x == "MATH ERROR!" || x=="SYNTAX ERROR!")
        document.getElementById('result').innerHTML = '';
    else
        document.getElementById('result').innerHTML = x.slice(0, -1);
}