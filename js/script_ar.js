// ------------------ loading img --------------
window.onload = function () {
  document.querySelector(".loading").classList.add("HideLoading");
};

// --------------------------- scroll to top btn----------------
let TopBtn = document.querySelector(".toTop");
window.onscroll = function () {
  if (window.pageYOffset > 500) {
    TopBtn.classList.remove("hide");
  } else {
    TopBtn.classList.add("hide");
  }
};
