const principle = document.querySelectorAll(".principle__text");

if (principle) {

principle.forEach(el => {
  el.addEventListener('click', function (e) {
    // узнаем тег при клике
    const tagP = e.target.nodeName;

    // если клик был по тексту то мы его пказываем
    if (tagP == 'P') {
      e.target.classList.toggle('principle__text-active');
    }
    
    //если клик был родителю то ...
    if (e.target.classList.contains('principle__text')) {
      // если текста не показывается то показываем
      if (!e.target.children[0].classList.contains('principle__text-active')) {
        e.target.children[0].classList.add('principle__text-active');
      }
      // если текст показан, то скрываем его
      else {
        e.target.children[0].classList.remove('principle__text-active');
      }
    }

  });
});

}