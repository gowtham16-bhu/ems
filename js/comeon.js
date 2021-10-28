function init(){
    let data = localStorage.getItem('rowvalue')
    singleval = data ? JSON.parse(data): "nothing";
    if(singleval){som()}
}


init();
function som(){
    let data = localStorage.getItem('rowvalue')


  
  const seed =JSON.parse(data)
  document.getElementById("name").innerHTML = seed.name;
    document.getElementById("email").innerHTML = seed.email;
    document.getElementById("addr").innerHTML = seed.address;
    document.getElementById("number").innerHTML = seed.phone;
    document.getElementById("city").innerHTML = seed.city;
    document.getElementById("role").innerHTML = seed.role;
  

  



}