const itens = []

const form = document.querySelector('.add-item')
const input = document.querySelector('#input-add-item')
const ul = document.querySelector('.list-items')
const aviso = document.querySelector(".alert")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let inputValue = input.value
    const newLi = document.createElement('li')
    const div = document.createElement('div')
    div.classList.add('list-item-init-content')
    const inputCheck = document.createElement('input')
    inputCheck.type = 'checkbox'
    const labelLi = document.createElement('label')
    labelLi.textContent = inputValue
    const imgLi = document.createElement('img')
    imgLi.src = './assets/img/icon_delete.svg'
    imgLi.id = 'icon-delete'
    aviso.classList.add('hidden')

    for (let i = 0; i < itens.length; i++) {
        if(inputValue == itens[i]) {
            alert("O item já existe na lista e por isso, não pode ser adicionada.")
        }
    }

    if (inputValue == "") {
        alert("Não é possível adicionar um produto sem nome.")
    } else {
        ul.appendChild(newLi)
        newLi.append(div, imgLi)
        div.append(inputCheck, labelLi)
        input.value = ""
        itens.push(inputValue)
    }

    imgLi.addEventListener('click', () => {
        for (let i = 0; i < itens.length; i++) {
            if (inputValue == labelLi.textContent) {
                itens.splice(i, 1)
                alert('SE FUDE')
                ul.removeChild(newLi)
                aviso.classList.remove('hidden')
            } 
        }
    })
})