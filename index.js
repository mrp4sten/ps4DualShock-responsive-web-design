const menuList = document.getElementById('menuList');
const toggleMenu = document.getElementById('toggleMenu');

menuList.style.maxHeight = '0px';

toggleMenu.addEventListener('click', () => {
  if (menuList.style.maxHeight === '0px') {
    menuList.style.maxHeight = '130px';
  } else if (menuList.style.maxHeight === '130px') {
    menuList.style.maxHeight = '0px';
  }
});
