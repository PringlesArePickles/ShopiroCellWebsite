document.addEventListener('DOMContentLoaded', () => {
    getPages();

    const navDots = document.querySelectorAll('.storyboard-nav_dot-inner'); // Find all navDots

    let initialDot = navDots[0]; // Set first dot as selected
    initialDot.classList.add('selected');

    navDots.forEach((navDot) => {
        navDot.addEventListener('click', () => {
            document.querySelectorAll('.selected').forEach((el) => el.classList.remove('selected'));
            
            navDot.classList.add('selected');

            checkPages(navDot.getAttribute('id'));
        });
    });
});

function getPages() {
    for (let i = 1; i <= 10; i++) {
        let pages = document.querySelectorAll(`#page${i}`);
        pages.forEach(page => page.style.display = i === 1 ? 'block' : 'none'); // Show only page1 initially
    }
}

function checkPages(dotId) {
    for (let i = 1; i <= 10; i++) {
        let pages = document.querySelectorAll(`#page${i}`);
        pages.forEach(page => {
            page.style.display = dotId === `pagePopup${i}` ? 'block' : 'none';
        });
    }
}
