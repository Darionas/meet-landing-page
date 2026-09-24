'use strict';

const buttons = document.querySelectorAll('.show');
const loader = document.querySelectorAll('.loader');
const modal = document.getElementById('my-dialog');
const previousFocus = document.activeElement;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.showModal();
        modal.focus();
        loader.forEach((dot) => {
            dot.classList.add('loading');
        });

        setTimeout(() => {
            modal.close();
            previousFocus.focus();
        }, 5000);
    });
});