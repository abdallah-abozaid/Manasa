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

// ------------------------------------------------------------
// Info links page
let btns = document.querySelectorAll(".InfoLinks .btns button");
let Contents = document.querySelectorAll(".InfoLinks .contant >div");
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    // remove active class from all btns + Hide all content
    for (let n = 0; n < btns.length; n++) {
      btns[n].classList.remove("Active");
      Contents[n].classList.add("Hide");
    }
    // add active class to clicked btn + delete Hide class from clicked content
    btns[i].classList.add("Active");
    Contents[i].classList.remove("Hide");
  };
}
