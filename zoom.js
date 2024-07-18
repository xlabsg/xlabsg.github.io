window.addEventListener("resize", () => {
  const viewer = window.pdf2htmlEX.defaultViewer;
  const original_width = viewer.pages[0].original_width;
  const next_scale = window.innerWidth / original_width;
  viewer.rescale(next_scale);
});

window.addEventListener("load", () => {
  const viewer = window.pdf2htmlEX.defaultViewer;
  const initial_scale = window.innerWidth / viewer.pages[0].original_width;
  viewer.rescale(initial_scale);
});
