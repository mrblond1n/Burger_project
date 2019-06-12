  ;const buttonMore = document.querySelectorAll('.more-review'),
    buttonRead = document.querySelectorAll('.read-review'),
    reviewSection = document.querySelector('.reviews'),
    reviewPopup = document.querySelectorAll('.review__popup'),
    popUpMessanges = document.querySelector('.popUp-messanges');

  for (let i = 0; i < buttonMore.length; i++) {
    buttonMore[i].addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.wrapper').addEventListener('wheel', () => {
        return false;
      })

      let newDiv = document.createElement('div');
      newDiv.innerHTML = reviewPopup[i].innerHTML;
      newDiv.classList.add('review__popup--active');
      newDiv.children[0].classList.add('review__content--active');
      popUpMessanges.appendChild(newDiv);

      newDiv.children[0].children[0].addEventListener('click', function () {
        newDiv.classList.remove('review__popup--active');
        newDiv.children[0].classList.remove('review__content--active');
        newDiv.remove();
        document.body.classList.remove('lock');
      })
    });

  };
  for (let i = 0; i < buttonRead.length; i++) {
    buttonRead[i].addEventListener('click', function (e) {
      e.preventDefault();

      let newDiv = document.createElement('div');
      newDiv.innerHTML = reviewPopup[i].innerHTML;
      newDiv.classList.add('review__popup--active');
      newDiv.children[0].classList.add('review__content--active');
      popUpMessanges.appendChild(newDiv);

      document.body.classList.add('lock');

      newDiv.children[0].children[0].addEventListener('click', function () {
        newDiv.classList.remove('review__popup--active');
        newDiv.children[0].classList.remove('review__content--active');
        newDiv.remove();
        document.body.classList.remove('lock');
      });
    });

};