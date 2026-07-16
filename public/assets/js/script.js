/* ---------- reveal on scroll ---------- */
// let io;
// function observeReveals(){
//   if (io) io.disconnect();
//   io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
//   document.querySelectorAll(".page.current .rv:not(.in)").forEach(el => io.observe(el));
// }