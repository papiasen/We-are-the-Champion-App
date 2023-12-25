import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playing-around-17c5e-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "endorsementsList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const endorsementEl = document.getElementById("endorsement-list")
const fromFieldEl = document.getElementById("from-field")
const toFieldEl = document.getElementById("to-field")

addButtonEl.addEventListener("click", function () {

    let inputValue = inputFieldEl.value
    let fromValue = fromFieldEl.value
    let toValue = toFieldEl.value

    push(endorsementsInDB, inputValue, fromValue, toValue)

    // push({
    //     from: "fsdfsd",
    //     to: "ghgfh",
    //     endorsement: "dfgdfgdfgfdg"
    // })

    endorsementListOnPage(inputValue, fromValue, toValue)



    clearTextArea()
})

function endorsementListOnPage(endorsementValue, frominputValue, toinputValue) {
    endorsementEl.innerHTML +=
        `<li>
    <b> ${frominputValue} </b>
    <p>
    ${endorsementValue} 
    </p>
    <b> ${toinputValue} </b>
    
        </li>`
}

function clearTextArea() {
    inputFieldEl.value = ""
}