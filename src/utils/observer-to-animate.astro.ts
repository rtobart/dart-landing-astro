export const observerToAnimate = (lastScrollTop: number) => {
  return new IntersectionObserver((entries) => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (st > lastScrollTop) {
            // downscroll code
            entry.target.classList.add("animate-down");
          } else {
            // upscroll code
            entry.target.classList.add("animate-up");
          }
        } else {
          entry.target.classList.remove("animate-down");
          entry.target.classList.remove("animate-up");
        }
      });
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
}