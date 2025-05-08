const itens = []

const form = document.querySelector('.add-item')
const input = document.querySelector('#input-add-item')
const ul = document.querySelector('.list-items')
const aviso = document.querySelector(".alert")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let inputValue = input.value
    let newLi = document.createElement('li')
    const div = document.createElement('div')
    div.classList.add('list-item-init-content')
    const inputCheck = document.createElement('input')
    inputCheck.type = 'checkbox'
    const labelLi = document.createElement('label')
    labelLi.textContent = inputValue
    const imgLi = document.createElement('img')
    imgLi.src = './assets/img/icon_delete.svg'
    imgLi.classList.add('icon-delete')
    aviso.classList.add('hidden')

    if (inputValue == "") {
        alert("Não é possível adicionar um produto sem nome.")
    } else if(itens.includes(inputValue)) {
        alert("O item já existe na lista e por isso, não pode ser adicionado.")
    } else {
        ul.appendChild(newLi)
        newLi.append(div, imgLi)
        div.append(inputCheck, labelLi)
        input.value = ""
        itens.push(inputValue)
    }

    imgLi.addEventListener('click', () => {
        for (let i = 0; i < itens.length; i++) {
            if (itens[i] == labelLi.textContent) {
                itens.splice(i, 1)
                ul.removeChild(newLi)
                aviso.classList.remove('hidden')
            } 
        }
    })
})