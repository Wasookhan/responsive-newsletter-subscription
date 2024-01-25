const input = document.querySelector('#input');
const btn = document.querySelector('#submit');
let container = document.querySelector('.container');

btn.addEventListener('click',(event)=>{
  event.preventDefault();
  if(input.value == "" && !input.value.includes('@') && !input.value.includes('.com')){
   let error =  document.querySelector('#error').style.display = "block"
  }else{
error.style.display = "none"
container.style.display = "none";
let successMessage = document.querySelector('.success');
successMessage.style.display = "block";
let cancelbtn = document.querySelector('#cancel');
cancelbtn.addEventListener('click',()=>{
successMessage.style.display = "none";
  container.style.display = "block";
  container.style.display = "flex"
  input.value = ""
})
  }
 

})