// const messages = document.querySelector('.msgsWrapper').addEventListener('click', messagesClick);

// function messagesClick(){
//     // console.log('I am clicked');
//     document.querySelector('.msgsWrapper').style.backgroundColor = 'hsl(211, 68%, 94%)';

// }

const messages = document.querySelectorAll('.msgsWrapper');
const icon = document.querySelectorAll('.iconClass');


for (let i = 0; i < messages.length; i++){
    messages[i].addEventListener('click', 
        function messagesClick(){
            messages[i].classList.toggle('blue');
    })

    console.log(i, "i am bg of wrapper")
}

for (let i = 0; i < icon.length; i++){
    icon[i].addEventListener('click', 
        function iconClick(){
            icon[i].classList.toggle('ikon');
    })

    console.log(i, "i am icon color")
}

// messages.addEventListener('click', () => {
//     document.querySelector('.msgsWrapper').getElementsByClassName.backgroundColor = 'hsl(211, 68%, 94%)';
// });
