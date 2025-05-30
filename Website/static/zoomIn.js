document.addEventListener('DOMContentLoaded', () => {
  const animalCircles = document.querySelectorAll('.animalCircle');
  const animalPopups = document.querySelectorAll('.animalPopupLabel');
  animalPopups.forEach(p => p.style.display = 'none');

  const plantCircles = document.querySelectorAll('.plantCircle');
  const plantPopups = document.querySelectorAll('.plantPopupLabel');
  plantPopups.forEach(p => p.style.display = 'none');

  const proCircles = document.querySelectorAll('.proCircle');
  const proPopups = document.querySelectorAll('.proPopupLabel');
  proPopups.forEach(p => p.style.display ='none');


  // Animal Circles
  animalCircles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
      const popupId = circle.getAttribute('animalDataPopup');
      const popup = document.getElementById(popupId);
      animalPopups.forEach(p => p.style.display = 'none');
      if (popup) {
        popup.style.display = 'block';
      }
    });

    circle.addEventListener('mouseout', () => {
      const popupId = circle.getAttribute('animalDataPopup');
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.style.display = 'none';
      }
    });
  });
   
  //pro circles
  proCircles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
      const popupId = circle.getAttribute('proDataPopup');
      const popup = document.getElementById(popupId);
      animalPopups.forEach(p => p.style.display = 'none');
      if (popup) {
        popup.style.display = 'block';
      }
    });

    circle.addEventListener('mouseout', () => {
      const popupId = circle.getAttribute('proDataPopup');
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.style.display = 'none';
      }
    });
  });
  // circle labels

  // Plant Circles
  plantCircles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
      const popupId = circle.getAttribute('plantDataPopup');
      const popup = document.getElementById(popupId);
      plantPopups.forEach(p => p.style.display = 'none');
      if (popup) {
        popup.style.display = 'block';
      }
    });

    circle.addEventListener('mouseout', () => {
      const popupId = circle.getAttribute('plantDataPopup');
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.style.display = 'none';
      }
    });
  });
});



