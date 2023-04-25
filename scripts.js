const number = document.querySelector ('[data-key= "number"]')
const substract= document.querySelector ('[data-key="substract"]')
const add= document.querySelector ('[data-key= "add"]')


const substractHandler = () => {
    number.value= number.value;}

    const addHandler = () => {
        number.value= number.value;}

    substract.addEventListener('click',substractHandler)    
    add.addEventListener('click',addHandler)    

        