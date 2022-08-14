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
        const attr = document.createAttribute("data-id");
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
        
        // set back to default
        setBackToDefault();
        // add to local storage
        addToLocalStorage(id, value);
        // selecting editing and delete btns within the element
        // deleting item function
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener('click', deleteItem) 
        editBtn.addEventListener('click', editItem)

        container.classList.add('show-container');
        showAlert(`${value} added succesfully`, "success");
    }
    // editing item
    else if (value && editFlag) {
        editElement.innerHTML = value;
        showAlert("value changed","success");
        // editLocalStorage(editID,value);
        setBackToDefault();
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
    alert.classList.add(`alert-${type}`);
    setTimeout(function(){
        alert.innerHTML = "";
        alert.classList.remove(`alert-${type}`);
    },1000)
}
// clear all items
function clearItems () {
    let items = document.querySelectorAll('.grocery-item');
    // console.log(items);
    items.forEach(function(item) {
        list.removeChild(item);
    })
    container.classList.remove('show-container');
    showAlert("All items cleared","danger"); 
    setBackToDefault();
    // remove from local storage
    localStorage.removeItem('list');
} 
// deleting items
function deleteItem (e) {
    const element = e.currentTarget.parentElement.parentElement;
    console.log(element);
    const id = element.dataset.id;
    console.log(id);
    list.removeChild(element);
    let title = element.querySelector('.title').innerHTML;
    console.log(title);
    showAlert(`${title} has deleted from the list`, "danger");
        if ( list.children.length === 0) {
            container.classList.remove('show-container');
        }
        removeFromLocalStorage(id);
        setBackToDefault();
        // ----------------------------- Buradayım
                
}
// editing items
function editItem (e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    
    editID = element.dataset.id;
    console.log(editID);
    editFlag = true;
    submitBtn.innerText = "edit";
}

// set back to default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.innerText = 'submit';
}


// ****** LOCAL STORAGE **********
// add item to local storage
function addToLocalStorage(id, value) {
    let item = {id, value}
    let items = getLocalStorage ();

    items.push(item);
    localStorage.setItem('list', JSON.stringify(items));
    // console.log("item added to local storage");
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    
    items = items.filter( function(item) {
        if (item.id !== id) {
        return item;
        }
        
    })
    console.log (items);
    localStorage.setItem('list', JSON.stringify(items));
};
function editLocalStorage (editID, value) {};
function getLocalStorage () {
    return (localStorage.getItem('list'))? 
    JSON.parse(localStorage.getItem('list')):[];
}

// localStorage API
// setItem
// getItem
// removeItem
// save as strings

// localStorage.setItem('orange', JSON.stringify(["item1","item1"]));
// const oranges =JSON.parse(localStorage.getItem('orange'));
// console.log(oranges);
// localStorage.removeItem('orange');



// ****** SETUP ITEMS **********
