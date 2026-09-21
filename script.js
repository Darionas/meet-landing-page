'use strict';

const buttons = document.querySelectorAll('.btn');
const loader = document.querySelectorAll('.loader');
const modal = document.querySelector('.modal');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
        loader.forEach((dot) => {
            dot.classList.add('loading');
        });

        setTimeout(() => {
            modal.style.display = 'none';
        }, 5000);
    });
});