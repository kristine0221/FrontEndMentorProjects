// const messages = document.querySelector('.msgsWrapper').addEventListener('click', messagesClick);

// function messagesClick(){
//     // console.log('I am clicked');
//     document.querySelector('.msgsWrapper').style.backgroundColor = 'hsl(211, 68%, 94%)';

// }

// const messages = document.querySelectorAll('.msgsWrapper');
// // // const icon = document.querySelectorAll('.iconClass');

// for (let i = 0; i < messages.length; i++){
//     messages[i].addEventListener('click', function messagesClick(){
//             messages[i].classList.toggle('blue');
//     })

//     // console.log(i, "i am bg of wrapper")
// }

// messages.addEventListener('click', () => {
//     document.querySelector('.msgsWrapper').getElementsByClassName.backgroundColor = 'hsl(211, 68%, 94%)';
// });

//count after clicking on section

const messages = document.querySelector('.msgsWrapper').addEventListener('click', msgsClick);

var clicks = 0
function msgsClick(){
    clicks += 1;
    document.getElementById('msgsCount').innerHTML = clicks;
    document.getElementById('msgsCount').classList.add('msgsCountStyle');
    // var element = document.getElementById('msgsCount');
    // element.classList.add('msgsCountStyle');
    
    // console.log(clicks);
}