
const plus = document.querySelectorAll(".plus")
console.log(plus)

plus.forEach(item => {

  item.addEventListener("click", (eo) => {

  const content = eo.target.parentElement.parentElement.getElementsByClassName("content")[0] 
    console.log(content)

  content.classList.toggle('active')

  
  if (content.classList.contains("active")) {
    content.style.height = `   ${content.scrollHeight}px   `;
  } else {
    content.style.height = ` 0  `;
  }

item.classList.toggle("hide-plus")

if (item.classList.contains("hide-plus")) {
  item.innerHTML = "-"
} else {
    item.innerHTML = "+"
}


  })





});






