
const cards = document.querySelectorAll('#card');
const btnMarkAll = document.getElementById('mark-all');
const notification = document.getElementById("notification");


cards.forEach( (card) => {
    card.addEventListener('click', () => {
        if(card.classList.contains('unread')){
            card.classList.remove('unread');
            notification.textContent -= 1;
            if(notification.textContent == 0) {
                // console.log(notification.textContent);
                notification.textContent = '';
            }
        }
    });
});

// mark all
btnMarkAll.addEventListener('click', () => {
    cards.forEach((card) => {
        if(card.classList.contains('unread')){
            card.classList.remove('unread');
            notification.textContent = '';
        }
       
    });
});