document.addEventListener('DOMContentLoaded', () => {
    getPages();

    const navDots = document.querySelectorAll('.storyboard-nav_dot-inner'); //find all navDots
    
    initialDot = navDots[0]; //set first dot to the first dot in the list
    initialDot.classList.add('selected'); //give the first dot the selected class
    var currentPage = 1;
    const dotId = initialDot.getAttribute('id');

    navDots.forEach((navDot) => {
        navDot.addEventListener('click', () => {
            const selectedElements = document.querySelectorAll('.selected'); //find all elements that are selected
            selectedElements.forEach((el) => el.classList.remove('selected')); //unselect them
        
            const dotId = navDot.getAttribute('id'); //get id of dot that was just clicked
            const dot = document.getElementById(dotId); //set dot to dot that has the same id as above
            
            if (dot) {
                dot.classList.add('selected'); //add selected class
            } else {
                console.error("No element found with ID:", dotId); //log
            }

            checkPages(dotId);
        });
    });
});

function getPages() {
    //get each page
    page1 = document.getElementById("page1");
    currentPage = 1;

    page2 = document.getElementById("page2");
    page2.style.display = 'none';
    currentPage = 2;

    page3 = document.getElementById("page3");
    page3.style.display = 'none';
    currentPage = 3;

    page4 = document.getElementById("page4");
    page4.style.display = 'none';
    currentPage = 4;

    page5 = document.getElementById("page5");
    page5.style.display = 'none';
    currentPage = 5;

    page6 = document.getElementById("page6");
    page6.style.display = 'none';
    currentPage = 6;

    page7 = document.getElementById("page7");
    page7.style.display = 'none';
    currentPage = 7;

    page8 = document.getElementById("page8");
    page8.style.display = 'none';
    currentPage = 8;

    page9 = document.getElementById("page9");
    page9.style.display = 'none';
    currentPage = 9;

    page10 = document.getElementById("page10");
    page10.style.display = 'none';
    currentPage = 10;
}

function checkPages(dotId){
    //page 1
    if (dotId == "pagePopup1")
    {
        page1.style.display = 'block';
    }
    else
    {
        page1.style.display = 'none';
    }

    //page 2
    if (dotId == "pagePopup2")
    {
        page2.style.display = 'block';
    }
    else
    {
        page2.style.display = 'none';
    }

    //page 3
    if (dotId == "pagePopup3")
    {
        page3.style.display = 'block';
    }
    else
    {
        page3.style.display = 'none';
    }

    //page 4
    if (dotId == "pagePopup4")
    {
        page4.style.display = 'block';
    }
    else
    {
        page4.style.display = 'none';
    }

    //page 5
    if (dotId == "pagePopup5")
    {
        page5.style.display = 'block';
    }
    else
    {
        page5.style.display = 'none';
    }

    //page 6
    if (dotId == "pagePopup6")
    {
        page6.style.display = 'block';
    }
    else
    {
        page6.style.display = 'none';
    }

    //page 7
    if (dotId == "pagePopup7")
    {
        page7.style.display = 'block';
    }
    else
    {
        page7.style.display = 'none';
    }

    //page 8
    if (dotId == "pagePopup8")
    {
        page8.style.display = 'block';
    }
    else
    {
        page8.style.display = 'none';
    }

    //page 9
    if (dotId == "pagePopup9")
    {
        page9.style.display = 'block';
    }
    else
    {
        page9.style.display = 'none';
    }

    //page 10
    if (dotId == "pagePopup10")
    {
        page10.style.display = 'block';
    }
    else
    {
        page10.style.display = 'none';
    }
}