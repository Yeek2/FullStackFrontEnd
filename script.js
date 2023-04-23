const images = [
        'https://blog.blacklane.com/wp-content/uploads/2019/06/Untitled-design-2019-06-12T095012.332.webp',
        'https://www.discoverlosangeles.com/sites/default/files/images/2022-09/lax-trains.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp',
        'https://www.gannett-cdn.com/media/USATODAY/USATODAY/2012/12/02/oakland-16_9.jpg?width=1800&height=1017&fit=crop&format=pjpg&auto=webp'
      ];
      const imageDuration = 5000; // 5 seconds
      var currentImageIndex = 0;
      
      const leftImage = document.getElementById('left-image');
      leftImage.style.backgroundImage = `url(${images[currentImageIndex]})`;
      function changeImage() {
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = new Image();
        nextImage.src = images[nextImageIndex];
        nextImage.onload = () => {
          const slideIn = 'right';
          const slideOut = 'left';
          leftImage.style.backgroundImage = `url(${images[currentImageIndex]})`;
          leftImage.style.backgroundPosition = `center ${slideOut}`;
          leftImage.style.transition = 'none';
          setTimeout(() => {
            leftImage.style.backgroundImage = `url(${images[nextImageIndex]})`;
            leftImage.style.backgroundPosition = `center ${slideIn}`;
            leftImage.style.transition = 'background-position 1s ease-out';
            currentImageIndex = nextImageIndex;
          }, 0);
        };
      }
      
      setInterval(changeImage, imageDuration);
      
      