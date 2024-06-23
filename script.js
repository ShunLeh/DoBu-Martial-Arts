//login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  

    if (username === "your_username" && password === "your_password") {

      alert("Login successful!");
      return true;
    } else {
      errorMessage.textContent = "Invalid username or password. Please try again.";
      return false;
    }
  }




//table
let data =[
  {id: 1, name: "shoon", email: "shoon@gmail.com", password:"123"},
  {id: 2, name: "Khaing", email: "khaing@gmail.com", password: "kkk"}
]

function readAll(){
  localStorage.setItem("object", JSON.stringify(data));
  var tabledata = document.querySelector(".data_table");

  var object = localStorage.getItem('object');
  var objectdata = JSON.parse(object);
  var elements = " ";

  objectdata.map(record => ( 
    elements += `<tr>
      <td>${record.name}</td>
      <td>${record.email}</td>
      <td>${record.password}</td>
      <td>
        <button class="edit" onclick={edit(${record.id})}>Edit</button>
        <button class="delete" onclick={delet(${record.id})}>Delete</button>

      </td>
    </tr>`
    
  ))

  tabledata.innerHTML = elements;
}

function delet(id) {
  data = data.filter(rec => rec.id !== id);
  readAll();
}

function create() {
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".add_div").style.display = "none";
  document.querySelector(".create_form").style.display = "block";
}

function add() {
  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".password").value;

  var newObj = {id: 3, name: name, email: email, password: password};
  data.push(newObj);

  document.querySelector(".create_form").style.display = "none";
  document.querySelector(".add_div").style.display = "block";
  document.querySelector(".create_form").style.display = "none";


  readAll();
}

function edit(id) {
  document.querySelector('.update_form').style.display = "block";
  var obj = data.find(rec => rec.id === id);
  document.querySelector('.uname').value = obj.name;
  document.querySelector('.uemail').value = obj.email;
  document.querySelector('.upassword').value = obj.password;
  document.querySelector('.id').value = obj.id;
}

function update() {
  var id = parseInt(document.querySelector('.id').value);
  var name = document.querySelector('.uname').value ;
  var email = document.querySelector('.uemail').value;
  var password = document.querySelector('.upassword').value;

  var obj = data.findIndex(rec => rec.id === id);
  data[indes] = {id, name, email, password};

  document.querySelector('.update_form').style.display = "none";
}