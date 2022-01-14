'use strict';

const buttons = document.querySelectorAll('button');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

buttons.forEach(button => {

  if (button.classList.contains('show-modal')) {
    button.addEventListener('click', (evt) => {
      console.log(evt);
      removeClassHidden(modalWindow, overlay);
    });
  }
  if (button.classList.contains('close-modal')) {
    button.addEventListener('click', () => {
      addClassHidden(modalWindow, overlay);
    });
  }

});

overlay.addEventListener('click', () => {
  addClassHidden(modalWindow, overlay);
})

document.addEventListener('keydown', (key) => {
  if(key.key === 'Escape'){
    addClassHidden(modalWindow, overlay);
  }
})

function addClassHidden(...args) {
  args.forEach(element => {
    element.classList.add('hidden');
  });
}

function removeClassHidden(...args) {
  args.forEach(element => {
    element.classList.remove('hidden');
  });
}
