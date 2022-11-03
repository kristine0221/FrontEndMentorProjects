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

//code below wrong coz its counting every click
// const messages = document.querySelector('.msgsWrapper').addEventListener('click', msgsClick);

// var clicks = 0
// function msgsClick(){
//     clicks += 1;
//     document.getElementById('msgsCount').innerHTML = clicks;
//     document.getElementById('msgsCount').classList.add('msgsCountStyle');
//     // var element = document.getElementById('msgsCount');
//     // element.classList.add('msgsCountStyle');
    
//     // console.log(clicks);
// }

let msgsCount = 3;
const unread = document.querySelectorAll('.unread');
const pluralNotif = document.querySelector('.plural');
const msgsCountSpan = document.querySelector('.msgsCount');
const markAllAsRead = document.querySelector('.mark');


function removeDots(elemRemove){
    const iconDot = elemRemove.querySelector('* > .dotIcon');
    iconDot.remove();
}


function manageCount(msgsCount){ 
    msgsCountSpan.textContent = msgsCount; //The textContent property sets or returns the text content of the specified node, and all its descendants.
    if(msgsCount <= 1){
        pluralNotif.style.display = "none";  //to remove the s from 'notifications' if notif count is < or = to 1
    }
}

unread.forEach(elemUnread => {
    elemUnread.addEventListener('click', ()=> {
        elemUnread.classList.remove('unread');
        removeDots(elemUnread);
        msgsCount--;
        manageCount(msgsCount);
    })
})


markAllAsRead.addEventListener('click', ()=>{
    // msgsCountSpan.textContent = 0;
    msgsCount = 0; //once mark all as read is clicked count will be set to 0
    unread.forEach(elem =>{
        elem.classList.remove('unread'); //remove the unread class
        removeDots(elem); //remove the red dots
        manageCount(msgsCount); //remove the s from 'notification'/s
    })  
})