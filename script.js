const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
});

const checkboxes = [...document.querySelectorAll('#tasks input')];
const counter = document.getElementById('count');
const ring = document.getElementById('ring');
const message = document.getElementById('progress-text');

function updateChecklist() {
  const checked = checkboxes.filter(box => box.checked).length;
  counter.textContent = `${checked}/${checkboxes.length}`;
  ring.style.setProperty('--pct', `${checked / checkboxes.length * 100}%`);
  message.textContent = checked === checkboxes.length
    ? 'Nice work. Keep these habits going!'
    : checked === 0
      ? 'Check off what you already do.'
      : `${checkboxes.length - checked} more to go. Every step helps.`;
}

checkboxes.forEach(box => box.addEventListener('change', updateChecklist));
document.getElementById('reset').addEventListener('click', () => {
  checkboxes.forEach(box => { box.checked = false; });
  updateChecklist();
});
document.getElementById('year').textContent = new Date().getFullYear();
updateChecklist();
