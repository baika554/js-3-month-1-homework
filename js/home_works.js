const checkInput = document.querySelector('#gmail_input')
const checkButton = document.querySelector('#gmail_button')
const checkResult = document.querySelector('#gmail_result')

const register = /^[a-zA-Z0-9_%+-]+([a-zA-Z]@gmail.com)$/;

checkButton.onclick = () => {
    if(register.test(checkInput.value)){
        checkResult.innerHTML = 'Удачно!'
        checkResult.style.color = 'green'

    }else{
        checkResult.innerHTML = 'Неправильно'
        checkResult.style.color = 'red'
    }
}

// 2 

let x = 0
function moveBlock (){
    const child = document.querySelector('.child_block')
    child.style.left = `${x}px`
    x++;
    if(x <= 448){
        requestAnimationFrame(moveBlock)
    }
} 
moveBlock()
