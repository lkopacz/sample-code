// For context, the instance I used this in there could be multiple videos on a pay
// hence setting the variable to a nodelist instead of an element.
const videoContainers = document.querySelectorAll('.modal');

videoContainers.forEach(container => {
  // For each video container create a a few button constants that we will add event listeners to 
  const openVideoButton = container.querySelector('.modal__open-video');
  const closeVideoButton = container.querySelector('.modal__close-video');
  
  // Targets the wrapper so we can add an external class to it
  const wrapper = container.querySelector('.modal__video');

  // Grabs the video so we can use video methods within the event listener functions
  const video = container.querySelector('video');
  
  // Upon opening the button it starts the video
  const openVideo = (e) => {
    wrapper.classList.add('open');
    // This starts listening for a keydown, so if 
    // the user can escape the video using their keyboard
    document.addEventListener('keydown', closeVideo);
    video.play();
  };

  // Upon closing it will pause where it's at, this way we return to it when we press play again
  const closeVideo = (e) => {
    // if the event has the keycode of the escape key, or they click on the close button
    if (e.keyCode === 27 || e.type === 'click') {
      video.pause();
      wrapper.classList.remove('open');
    }
  }

  openVideoButton.addEventListener('click', openVideo);
  closeVideoButton.addEventListener('click', closeVideo);
});