document.addEventListener('DOMContentLoaded', () => {
  const animalCircles = document.querySelectorAll('.animalCircle');
  const animalPopups = document.querySelectorAll('.animalPopupLabel');
  animalPopups.forEach(p => p.style.display = 'none'); // Hide all popups

  const plantCircles = document.querySelectorAll('.plantCircle');
  const plantPopups = document.querySelectorAll('.plantPopupLabel');
  plantPopups.forEach(p => p.style.display = 'none') // Hide all popups
  
  animalCircles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
      const popupId = circle.getAttribute('animalDataPopup');
      const popup = document.getElementById(popupId);
      animalPopups.forEach(p => p.style.display = 'none'); // Hide all popups
      popup.style.display = 'block';
    });
  
    circle.addEventListener('mouseout', () => {
      const popupId = circle.getAttribute('animalDataPopup');
      const popup = document.getElementById(popupId);
      popup.style.display = 'none';
    });
  });

  plantCircles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
      console.log("mouse over");
      const popupId = circle.getAttribute('plantDataPopup');
      const popup = document.getElementById(popupId);
      plantPopups.forEach(p => p.style.display = 'none'); // Hide all popups
      popup.style.display = 'block';
      console.log("mouse over after");
    });
  
    circle.addEventListener('mouseout', () => {
      console.log("mouse out");
      const popupId = circle.getAttribute('plantDataPopup');
      const popup = document.getElementById(popupId);
      popup.style.display = 'none';
      console.log("mouse out after");
    });
  });
});
