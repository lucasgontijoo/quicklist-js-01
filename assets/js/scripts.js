const form = document.querySelector('.add-item')
const input = document.querySelector('#input-add-item')
const ul = document.querySelector('.list-items')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let inputValue = input.value
    const newLi = document.createElement('li')
    const div = document.createElement('div')
    div.classList.add('list-item-init-content')
    const inputCheck = document.createElement('input')
    inputCheck.type = 'checkbox'
    const labelLi = document.createElement('label')
    labelLi.innerText = inputValue
    const imgLi = document.createElement('img')
    imgLi.src = './assets/img/icon_delete.svg'
    imgLi.classList.add('icon-delete')

    if (inputValue == "") {
        alert("Não é possível adicionar um produto sem nome.")
    } else {
        ul.appendChild(newLi)
        newLi.append(div, imgLi)
        div.append(inputCheck, labelLi)
        
        input.value = ""
    }
})

const deleteIcon = document.querySelector('.icon-delete')

deleteIcon.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('teste')

    ul.removeChild(newLi)
    newLi.remove(div, imgLi)
    div.remove(inputCheck, labelLi)
})