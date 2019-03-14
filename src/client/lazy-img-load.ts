function lazyImgLoad() {
  const observer = new IntersectionObserver(
    changes => {
      changes.forEach(change => {
        if (!change.isIntersecting) return;
        // @ts-ignore
        change.target.src = change.target.dataset.src;
        observer.unobserve(change.target);
      });
    },
    {
      rootMargin: "50px 0px"
    }
  );

  const lazyImgEl = document.querySelectorAll(".lazy");
  for (const el of lazyImgEl) {
    observer.observe(el);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", lazyImgLoad);
} else {
  lazyImgLoad();
}
