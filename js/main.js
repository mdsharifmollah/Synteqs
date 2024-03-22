(function () {
  const mobile_header = document.querySelector('.mobile_header');
    const icon = document.querySelector('.icon-container');
    icon.onclick = function () {
        mobile_header.classList.toggle('menu-open');
    }
}());