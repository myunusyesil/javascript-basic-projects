// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem (e) {
    e.preventDefault();
    let value = grocery.value;

    // adding item for the first time
    if (value && !editFlag) {
        // console.log(value);
        const id = new Date().getTime().toString();
        // console.log(id);
        const element = document.createElement("article");
        element.classList.add("grocery-item")
        const attr = document.createAttribute("dataset-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
        </div>`
        list.appendChild(element);
        container.classList.add('show-container');
        showAlert(`${value}`+" added succesfully", "success");
    }
    // editing item
    else if (value && editFlag) {
        console.log("editing item") 
    }
    // no value submitted
    else {
        console.log("please enter a value")
        showAlert("Please submit an item","danger");
    }
}

function showAlert (text, type) {
    alert.innerHTML = text;
    alert.classList.add("alert-"+`${type}`);
    setTimeout(function(){
        alert.innerHTML = "";
        alert.classList.remove("alert-"+`${type}`);
    },1000)
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
