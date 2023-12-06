const images = document.querySelectorAll('.portfolio-img');

images.forEach(img => {
  img.addEventListener('click', () => {

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const imgElement = document.createElement('img');
    imgElement.src = img.src;
    imgContainer.appendChild(imgElement);
    overlay.appendChild(imgContainer);
    document.body.appendChild(overlay);
    

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});
