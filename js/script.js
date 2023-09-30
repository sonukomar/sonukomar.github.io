window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );
}

setScrollVar();

const observer = new IntersectionObserver((entries, observer) => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];
    if (entry.isIntersecting) {
      // document.querySelectorAll("[data-img]").forEach((img) => {
      //   img.classList.remove("show");
      // });
      console.log(entry);
      document.querySelector("[data-text]").classList.add("animateHeader");
      // const img = document.querySelector(entry.target.dataset["imgToShow"]);
      // img?.classList.add("show");
      observer.unobserve(document.querySelector("[data-header]"));
      break;
    }
  }
});

setTimeout(() => {
  // document.querySelectorAll("[data-img-to-show]")?.forEach((section) => {
  //   observer.observe(section);
  // });
  // observer.observe(document.querySelector("[data-header]"));
  // observer.observe(document.querySelector("[data-header2]"));
  // observer.observe(document.querySelector("[data-header3]"));
}, 100);

// $(function(){

//     $('.downloadLink').click(function(e) {
//         e.preventDefault();  //stop the browser from following
//         window.location.href = '../Resumenew.pdf';
//     });

// })
