document.addEventListener('DOMContentLoaded', () => {
  console.log("Loaded zoomIn.js");
  const circles = document.querySelectorAll('.circle');
  const popups = document.querySelectorAll('.popup-label');
  popups.forEach(p => p.style.display = 'none'); // Hide all popups
  
  circles.forEach(circle => {
    console.log('circles:', circles);
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
});
