// HEADER SECTION 

// CREATE A FUNCTION TO ADD MENU-OPEN CLASS TO TOGGLE MENU BUTTON
(function () {
    // GRAP TOGGLE MENU
    const toggleMenu = document.querySelector('.toggle-menu');
    const navList = document.querySelector('.navbar-list');
    const navbarArea = document.querySelector('.navbar-area');

    // ADDING EVENT LISTENER TO TOGGLE MENU BUTTON
    toggleMenu.addEventListener('click', function () {
        toggleMenu.classList.toggle('menu-open');
        navList.classList.toggle('show');
    });

    // REMOVE MENU-OPEN AND SHOW CLASSES WHEN RESIZING WINDOW
    window.addEventListener('resize', function () {
        if (window.innerWidth > 991) {
            toggleMenu.classList.remove('menu-open');
            navList.classList.remove('show');
        }
    });

})();