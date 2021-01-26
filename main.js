// definition of all the functions

// navigation event listeners
let boolContentVisible = false;
const textContainer = document.getElementsByClassName('pages-content')[0];
const gridContainer = document.getElementsByClassName('rig')[0];
const navItems = document.getElementsByClassName('rig-cell');
function navigationContent() {
  for (let i = 0; i < navItems.length; i++) {
    const text = document.getElementById('pages-content__' + navItems[i].id);
    navItems[i].addEventListener('click', function () {
      gridContainer.style.setProperty('position', boolContentVisible ? 'relative' : 'absolute');
      gridContainer.setAttribute('class', 'rig slide-out');
      textContainer.style.setProperty('display', boolContentVisible ? 'none' : 'inline-table');
      text.style.setProperty('opacity', boolContentVisible ? 0 : 1);
      text.style.setProperty('display', boolContentVisible ? 'none': 'block');
      boolContentVisible = !boolContentVisible;
    });
  }
}

// back to menu button navigation
const menuButton = document.getElementById('pages-content__close').addEventListener('click', function() {
  boolContentVisible = !boolContentVisible;
  textContainer.style.setProperty('display','none');
  textContainer.style.setProperty('opacity', 1);
  gridContainer.style.setProperty('height', 'auto');
  gridContainer.style.setProperty('display', 'table');
  gridContainer.style.setProperty('position', 'relative');
  gridContainer.setAttribute('class', 'rig slide-in');
  for (let i = 0; i < navItems.length; i++) {
    const text = document.getElementById('pages-content__' + navItems[i].id);
    text.style.setProperty('opacity', 0);
    text.style.setProperty('display', 'none');
  }
});

// translate
document.getElementsByClassName('language__select')[0].addEventListener('change', function(e) {
  $("[data-localize]").localize("language", { language: e.target.value });
});

function translate() {
  $("[data-localize]").localize("language", { language: "en" });
}


translate();
navigationContent();