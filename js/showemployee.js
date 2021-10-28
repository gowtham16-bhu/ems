let employees = [];
let nameElem = document.getElementById("name");
let numberElem = document.getElementById("number");
let emailElem = document.getElementById("email");
let addressElem = document.getElementById("address");
let cityElem = document.getElementById("city");
let roleElem = document.getElementById("role");
let employeeIndex = null;

function init(){
        let data = localStorage.getItem('employees')
        employees = data ? JSON.parse(data): [];
        if(employees.length > 0) showTable();
    }
    
    
init();


function showTable() {
    employees.forEach((employee, index) => {
      var table = document.getElementsByTagName("tbody")[0];
      var newRow = table.insertRow(table.length);
      newRow.setAttribute("id", index);
      var cell0 = newRow.insertCell(0);
      cell0.innerHTML = employee.name;
      var cell1 = newRow.insertCell(1);
      cell1.innerHTML = employee.number;
      var cell2 = newRow.insertCell(2);
      cell2.innerHTML = employee.email;
      var cell3 = newRow.insertCell(3);
      cell3.innerHTML = employee.address;
      var cell4 = newRow.insertCell(4);
      cell4.innerHTML = employee.city;
      var cell5 = newRow.insertCell(5);
      cell5.innerHTML = employee.role;
      var cell6 = newRow.insertCell(6);
      cell6.innerHTML =  `<input type="submit" value='view' onclick='show(${index})'/>
       <button onclick='editEmployee()'>Edit</button> `;
     
      console.log(index)
   
    });
}
function updateEmployee(){
  let employee = {
      name: nameElem.value,
      number: numberElem.value,
      email: emailElem.value,
      address: addressElem.value,
      city: cityElem.value,
      role: roleElem.value,
     
    }

    employees[employeeIndex] = employee;
    localStorage.setItem('employees',JSON.stringify(employees))
    let selectedRow = document.querySelector('[index="'+employeeIndex+'"]')

    selectedRow.cells[0].innerHTML = employee.name;
    selectedRow.cells[1].innerHTML = employee.number;
    selectedRow.cells[2].innerHTML = employee.email;
    selectedRow.cells[3].innerHTML = employee.address;
    selectedRow.cells[4].innerHTML = employee.city;
    selectedRow.cells[5].innerHTML = employee.role;
   
   
}

function onFormSubmit(e) {
  e.preventDefault()

  if(employeeIndex != null) updateEmployee();
  else createEmployee();
// console.log(localStorage.getItem('employees'));
}


function editEmployee(element) {
  
  console.log("edited");
  
  selectedRow = element.parentElement.parentElement;

  employeeIndex = selectedRow.getAttribute('index');

  let employee = employees[employeeIndex];
  console.log(employee)
  
  document.getElementById("name").value = employee.name;
  document.getElementById("number").value =employee.number;
  document.getElementById("email").value = employee.email;
  document.getElementById("address").value = employee.address;
  document.getElementById("city").value = employee.city;
  document.getElementById("role").value = employee.role;
  
  location.href = "updateemployee.html";
  
  
}
function show(index) {
  

  
  var name = employees[index].name;
  var address = employees[index].address;
  var city = employees[index].city;
  var email =employees[index].email;
  var phone = employees[index].number;
  var name =employees[index].name;
  var role =employees[index].role;
  const rowvalue = {name,address,city,email,phone,name,role}
  localStorage.setItem('rowvalue', JSON.stringify(rowvalue))
  location.href="viewemployee.html";
}
  
    
    
    
    
    
 
      
  
    
  
  

  
  
  
  
  
  


  

 

 
  