const connectButton = document.getElementById('connect-btn');
const printerModel = document.getElementById('printer-model');
const printerStatus = document.getElementById('printer-status');
const printerTemp = document.getElementById('printer-temp');
const printerProgress = document.getElementById('printer-progress');

function openTutorial(method) {
    let url = '';
    switch(method) {
      case 'raspberry-pi':
        url = 'https://www.raspberrypi.com/tutorials/set-up-raspberry-pi-octoprint/';
        break;
      case 'android':
        url = 'https://all3dp.com/2/octo4a-octoprint-android/';
        break;
      case 'windows':
        url = 'https://community.octoprint.org/t/setting-up-octoprint-on-windows/383';
        break;
      case 'internet':
        url = 'https://printoid.net/access-octoprint-from-the-internet/';
        break;
    }
    window.open(url, '_blank');
}
document.getElementById('printer-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const profile = {
      name: document.getElementById('printer-name').value,
      model: document.getElementById('printer-model').value,
      status: document.getElementById('printer-status').value,
      temperature: document.getElementById('printer-temp').value,
      progress: document.getElementById('printer-progress').value
    };
  
    localStorage.setItem('printerProfile', JSON.stringify(profile));
    alert('Printer profile saved!');
});
window.addEventListener('DOMContentLoaded', () => {
    const savedProfile = localStorage.getItem('printerProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      document.getElementById('printer-name').value = profile.name || '';
      document.getElementById('printer-model').value = profile.model || '';
      document.getElementById('printer-status').value = profile.status || '';
      document.getElementById('printer-temp').value = profile.temperature || '';
      document.getElementById('printer-progress').value = profile.progress || '';
    }
});

document.querySelectorAll('.favorite-btn').forEach(button => {
  button.addEventListener('click', () => {
      const title = button.getAttribute('data-title');
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (favorites.includes(title)) {
          favorites = favorites.filter(fav => fav !== title);
          button.classList.remove('active');
          button.innerHTML = '🤍';
      } else {
          favorites.push(title);
          button.classList.add('active');
          button.innerHTML = '❤️'; 
      }

      localStorage.setItem('favorites', JSON.stringify(favorites));
  });

  const title = button.getAttribute('data-title');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (favorites.includes(title)) {
      button.classList.add('active');
      button.innerHTML = '❤️';
  }
});

