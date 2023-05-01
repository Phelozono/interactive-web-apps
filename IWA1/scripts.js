const number = document.querySelector ('[data-key= "number"]')
const substract= document.querySelector ('[data-key="substract"]')
const add= document.querySelector ('[data-key= "add"]')


const substractHandler = () => {
counter.value= number.value;}

    const addHandler = () => {
        counter.value= number.value;}

    substract.addEventListener('click',substractHandler)    
    add.addEventListener('click',addHandler)    

        