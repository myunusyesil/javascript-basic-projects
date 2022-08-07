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
clearBtn.addEventListener('click', clearItems);

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
        // selecting editing and delete btns
        // deletin item function
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener('click', function (e) {
            const item = e.currentTarget.parentElement.parentElement;
            list.removeChild(item);
            let title = item.querySelector('.title').innerHTML;
            console.log(title);
            showAlert(`${title}`+" has deleted from the list", "danger");
            if ( list.children.length === 0) {
                container.classList.remove('show-container');
            }
            // console.log(item);
        });
        // console.log(deleteBtn,editBtn);

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
// showAlert 
function showAlert (text, type) {
    alert.innerHTML = text;
    alert.classList.add("alert-"+`${type}`);
    setTimeout(function(){
        alert.innerHTML = "";
        alert.classList.remove("alert-"+`${type}`);
    },1000)
}

function clearItems () {
    let items = document.querySelectorAll('.grocery-item');
    console.log(items);
    items.forEach(function(item) {
        list.removeChild(item);
    })
    container.classList.remove('show-container');
    showAlert("All items cleared","danger"); 
} 



// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
