import menu from './menu.json';
import './styles.css';
import smth from './templates/item.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const check = document.querySelector('input[type="checkbox"]');

const theme = document.querySelector('input.js-switch-input');
const body = document.querySelector('body');

const local = localStorage.getItem('Theme');

if (local === 'DARK') {
  body.classList.add(Theme.DARK);
  check.checked = true;
} else {
  body.classList.add(Theme.LIGHT);
  check.checked = false;
}

theme.addEventListener('change', e => {
  if (body.classList.contains(Theme.LIGHT)) {
    localStorage.setItem('Theme', 'DARK');
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else if (body.classList.contains(Theme.DARK)) {
    localStorage.removeItem('Theme', Theme.LIGHT);

    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
});

const refs = {
  itemM: document.querySelector('.js-menu'),
};

buildPost(menu);

function buildPost(menu) {
  const markup = menu.map(men => smth(men)).join('');
  refs.itemM.insertAdjacentHTML('beforeend', markup);
}
