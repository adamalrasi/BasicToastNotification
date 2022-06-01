const btn = document.getElementById('btn')
const container = document.getElementById('container')

const fName = document.getElementById('name')
const box = document.getElementById('box')

fName.addEventListener('click', () => {
    createName();
});

function createName() {
    const notif = document.createElement('div');
    notif.classList.add('name');

    notif.innerText = 'Adam Alrasi'

    box.appendChild(notif);

    setTimeout(() => {
        notif.remove();

    }, 700);
}

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = 'Lets go'

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();

    }, 700);
}
