const openFrameMap = () => {
  const map = document.querySelector('.contacts-map__interactive');
  const mapImage = document.querySelector('.contacts-map__image-wrapper');

  if (map) {
    map.classList.remove('contacts-map__interactive--nojs');
    mapImage.classList.add('contacts-map__image-wrapper--js');
  }
};

export {openFrameMap};
