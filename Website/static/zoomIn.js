const circles = document.querySelectorAll('.circle');
const popups = document.querySelectorAll('.popup-image');

circles.forEach(circle => {
  circle.addEventListener('mouseover', () => {
    const popupId = circle.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    popups.forEach(p => p.style.display = 'none'); // Hide all popups
    popup.style.display = 'block';
  });

  circle.addEventListener('mouseout', () => {
    const popupId = circle.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
  });
});
