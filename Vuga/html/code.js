var LogVal, PswdVal;
logs = [], passwords = [];
isVis = 0;
function changeVis() {
    if (!isVis) {
    document.getElementById("psswd").type = "text"
    document.getElementById("psdIMG").src = "static/unlock.png"
    isVis = 1
    } else {
    document.getElementById("psswd").type = "password"
    document.getElementById("psdIMG").src = "static/lock.png"
    isVis = 0
    }
    console.log(IsOld);
}

function SignOnORIn() {
    LogVal = document.getElementById("login").value
    PswdVal = document.getElementById("psswd").value
    LogVal = LogVal.toString().trim()
    PswdVal = PswdVal.toString().trim()
    if (LogVal == '' || PswdVal == '') {
        if (LogVal == '') {
          document.getElementById("login").style.border = "solid 3px rgb(223, 7, 7)"
        } else document.getElementById("login").style.border = "solid 1px rgb(255, 255, 255)"
        if (PswdVal == '') {
          document.getElementById("psswd").style.border = "solid 3px rgb(223, 7, 7)"
        } else document.getElementById("psswd").style.border = "solid 1px rgb(255, 255, 255)"
        return 0;
    }
    if (logs.includes(LogVal)) {
        if (passwords[logs.indexOf(LogVal)] == PswdVal) {
            window.location.href="http://localhost:3000/goodauth"
        }
        else {
          document.getElementById("psswd").style.border = "solid 3px rgb(223, 7, 7)";
          return 0;
        }
    } else {
        logs.push(LogVal.toString())
        passwords.push(PswdVal.toString())
        window.location.href="http://localhost:3000/goodauth"
    }
    console.log(logs)
    console.log(passwords)
    document.getElementById("login").value = ''
    PswdVal = document.getElementById("psswd").value = ''
    document.getElementById("login").style.border = "solid 1px black"
    document.getElementById("psswd").style.border = "solid 1px black"
}
