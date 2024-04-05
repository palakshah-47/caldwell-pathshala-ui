const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    menu.classList.add('flex-col');
    menu.classList.add('w-fit');
  }
  if (closeBtn.classList.contains('hidden')) {
    closeBtn.classList.remove('hidden');
    closeBtn.classList.add('flex');
    closeBtn.classList.add('justify-end');
  }
  if (burger.classList.contains('block')) {
    burger.classList.add('hidden');
    burger.classList.remove('block');
  }
});

closeBtn.addEventListener('click', () => {
  if (menu.classList.contains('flex')) {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    menu.classList.remove('flex-col');
    menu.classList.remove('w-fit');
  }
  if (burger.classList.contains('hidden')) {
    burger.classList.add('block');
    burger.classList.remove('hidden');
  }
});
