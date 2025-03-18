const h1 = document.createElement("h1")
const p = document.createElement("p")
const a = document.createElement("a")

const scr = document.createElement("script")
scr.src = "./js/index.js"

const classAttr = document.createAttribute("class")
classAttr.value = "btn-1"

const documentObjectModel = {
    html: {
        head: {
            meta: {
                charset: `<meta charset="UTF-8">`,
                viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
            },
            title: {
                innerText: ""
            },
        },
        body: {
            children: [
                h1,
                p,
                a,
                scr,
            ],
        },
    }
}

documentObjectModel.html.body.children[0].innerText = "Hello!"
documentObjectModel.html.head.title.innerText = "My title"
documentObjectModel.html.body.children[2].innerText = "Btn"
documentObjectModel.html.body.children[2].href = "#"
documentObjectModel.html.body.children[2].setAttribute("id", "link-1")
documentObjectModel.html.body.children[2].setAttributeNode(classAttr)

console.log(documentObjectModel.html.head.title.innerText)
console.log(documentObjectModel.html.body.children[2])




const heading = document.querySelector("h1")

let x

heading.innerHTML = "Termux Lover"

x = heading.innerText

console.log(x)


// let deviceRes = setInterval(() => {
//     console.log(`${window.innerWidth} x ${window.innerHeight}`)
// }, 100)


console.log(`${window.innerWidth} x ${window.innerHeight}`)

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window


// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document


// window.history.back() - same as clicking back in the browser
// window.history.forward() - same as clicking forward in the browser


const res = document.getElementById("result")

res.innerHTML = navigator.onLine


// alert("Hello\nHow are you?")


function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
}

// checkCookie()


const loc = document.getElementById("location")

function getLocation() {
    try {
      navigator.geolocation.getCurrentPosition(showPosition);
    } catch(err) {
      loc.innerHTML = err;
    }
}

function showPosition(position) {
    loc.innerHTML = "Latitude: " + position.coords.latitude.toFixed(2) + 
    "<br>Longitude: " + position.coords.longitude.toFixed(2);
}

getLocation()