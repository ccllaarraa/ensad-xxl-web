//so that event on homepage keep stacking over eachother
document.querySelectorAll('.event-row').forEach((div, index) => {
  div.style.setProperty('--i', index + 1);
});