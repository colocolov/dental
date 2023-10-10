// scroll
const founderNumbers = document.querySelector(".founder__numbers");
if (founderNumbers) {

  
  const isInViewport = function (elem) {
    const distance = elem.getBoundingClientRect();
    // console.log('elem - ' + elem.clientHeight * 10);
    // console.log('distan - ' + distance.top);
    return (
      distance.top <= (elem.clientHeight * 9.2)
      // distance.top >= 0 &&
      // distance.left >= 0 &&
      // distance.bottom <=
      //   (window.innerHeight || document.documentElement.clientHeight) &&
      // distance.right <=
      //   (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const findMe = document.querySelector(".founder__numbers");
  let eventStatus = false;

  window.addEventListener('scroll', function(event) {
    // console.log(isInViewport(findMe));
    if (isInViewport(findMe)) {
      // console.log(isInViewport(findMe));
      // console.log('i see');
      if (!eventStatus) {
        // animate count scriprt
        const dataCounters = document.querySelectorAll(".founder__circle");
        
        dataCounters.forEach((item) => {
          let interval = parseInt(item.getAttribute("data-time")) * 500;

          let startValue = parseInt(item.getAttribute("data-min"));
          let endValue = parseInt(item.getAttribute("data-max"));
          let duration = Math.floor(interval / (endValue - startValue));

          let counter = setInterval(function () {
            startValue += 1;
            item.textContent = startValue;
            if (startValue == endValue) {
              clearInterval(counter);
            }
          }, duration);

        });
        eventStatus = true;
      }
    }
  }, false);

}