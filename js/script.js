const h1 = document.createElement("h1")
const p = document.createElement("p")
const a = document.createElement("a")

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