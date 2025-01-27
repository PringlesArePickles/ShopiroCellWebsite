document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded pageSelect.js");

    const navDots = document.querySelectorAll('.storyboard-nav_dot-inner');
    console.log('navDots:', navDots); // Log the NodeList

    navDots.forEach((navDot) => {
        console.log('Processing navDot:', navDot); // Log each dot before attaching the listener

        navDot.addEventListener('click', () => {
            console.log("navdot clicked!");

            // Debug selected logic
            const selectedElements = document.querySelectorAll('.selected');
            console.log("Currently selected elements:", selectedElements);

            selectedElements.forEach((el) => el.classList.remove('selected'));
            
            // Debug ID retrieval
            const dotId = navDot.getAttribute('id');
            console.log("Clicked dot ID:", dotId);

            const dot = document.getElementById(dotId);
            if (dot) {
                console.log("Found element with ID:", dot);
                dot.classList.add('selected');
                console.log("added selected class to dot")
            } else {
                console.error("No element found with ID:", dotId);
            }
        });
    });
});
