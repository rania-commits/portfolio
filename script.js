// Gestion des compétences
const buttons = document.querySelectorAll('.toggle-btn');
const skillContainers = document.querySelectorAll('.skills-container');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // toggle bouton actif
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // afficher la bonne section
    skillContainers.forEach(c => c.classList.remove('active'));
    document.getElementById(btn.dataset.skill + '-skills').classList.add('active');
  });
});

// Gestion des modals
const modals = document.querySelectorAll('.modal');
const openButtons = document.querySelectorAll('.project-btn');
const closeButtons = document.querySelectorAll('.close');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.modal).style.display = 'block';
  });
});

closeButtons.forEach(close => {
  close.addEventListener('click', () => {
    close.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  modals.forEach(m => {
    if (e.target === m) m.style.display = 'none';
  });
});
