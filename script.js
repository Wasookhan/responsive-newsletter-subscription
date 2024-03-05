const input = document.querySelector("#input");
const btn = document.querySelector("#submit");
let container = document.querySelector(".container");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (!emailRegex.test(input.value)) {
    let error = document.querySelector("#error").style.display = "block";
  } else {
    error.style.display = "none";
    container.style.display = "none";
    let successMessage = document.querySelector(".success");
    successMessage.style.display = "block";
    let email = document.querySelector('#email');
    email.innerHTML = input.value;
    let cancelbtn = document.querySelector("#cancel");
    cancelbtn.addEventListener("click", () => {
      successMessage.style.display = "none";
      container.style.display = "block";
      container.style.display = "flex";
      input.value = "";
     
    });
  }
});
