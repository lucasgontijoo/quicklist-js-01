const form = document.querySelector('.add-item')
const btn = document.querySelector('.btn-add-item')
const input = document.querySelector('#input-add-item')
const ul = document.querySelector('.list-items')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const inputValue = input.value
    const newLi = document.createElement("li")
    const div = document.createElement("div")
    div.classList.add('list-item-init-content')
    const input = document.createElement("input")
    const label = document.createElement("label")
    label.innerText = inputValue
    
    ul.appendChild(newLi)
    newLi.appendChild(div)
    div.appendChild(input)
    div.appendChild(label)

    alert('passa aqui')
})