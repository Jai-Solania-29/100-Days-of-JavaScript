const count = document.querySelector(".count");
const input = document.querySelector(".inp");

input.addEventListener("keyup", () =>{
    count.innerHTML = input.value.length;
})