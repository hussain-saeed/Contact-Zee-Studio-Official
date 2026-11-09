(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    return;
  }

  var animated = document.querySelectorAll(".portrait img, .eyebrow, h1, .tagline, .contacts, .contact");

  function release(el) {
    el.style.animation = "none";
  }

  animated.forEach(function (el) {
    el.addEventListener("animationend", function (event) {
      if (event.target !== el) {
        return;
      }
      release(el);
    });
  });

  document.querySelectorAll(".contact").forEach(function (el) {
    el.addEventListener("pointerenter", function () {
      release(el);
    }, { once: true });
  });
})();
