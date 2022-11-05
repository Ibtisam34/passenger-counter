let saveEl = document.getElementById('save-el')
let counEl = document.getElementById('count-el')
let count = 0

function increment() {
  count = count+1
  counEl.innerText= count
}

function save() {
 let  countStr = count + "-"
 saveEl.textContent += countStr
}
