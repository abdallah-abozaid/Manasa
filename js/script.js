// --------------------------- scroll to top btn----------------
let TopBtn = document.querySelector(".toTop");
window.onscroll = function () {
  if (window.pageYOffset > 500) {
    TopBtn.classList.remove("hide");
  } else {
    TopBtn.classList.add("hide");
  }
};

// ---------------------------------language--------------------
// to determain what the language once open website
if (localStorage.getItem("language") == null) {
  setLang("EN");
} else {
  setLang(localStorage.getItem("language"));
}
// event on button to call function that will change the language
let lang = document.getElementById("language");
lang.onclick = () => {
  if (localStorage.getItem("language") == "EN") {
    setLang("AR");
  } else {
    setLang("EN");
  }
};
// the function will change the language
function setLang(lang) {
  // for english class and texts
  if (lang == "EN") {
    localStorage.setItem("language", "EN");
    document.querySelector("body").classList.remove("arabic");
    document.querySelector(
      "header .FstHeader .navbar-nav > li:first-of-type"
    ).innerHTML = "Register As";
    document.querySelector(
      "header .FstHeader .navbar-nav > li:nth-of-type(2) > a"
    ).innerHTML = " Company";
    document.querySelector(
      "header .FstHeader .navbar-nav > li:nth-of-type(3) > a"
    ).innerHTML = " Bayer";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(1) p"
    ).innerHTML =
      " TOP 10,000 <span>Tur</span>key <br/> Se<span>ar</span>ch a company <br/> Search a Cate<span>g</span>ories";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(2) p"
    ).innerHTML =
      " TOP 10,000 <span>Tur</span>key <br/> Se<span>ar</span>ch a company <br/> Search a Cate<span>g</span>ories";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(3) p"
    ).innerHTML =
      " TOP 10,000 <span>Tur</span>key <br/> Se<span>ar</span>ch a company <br/> Search a Cate<span>g</span>ories";

    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(1) a"
    ).innerHTML = "CONTUCT US";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(2) a"
    ).innerHTML = "CONTUCT US";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(3) a"
    ).innerHTML = "CONTUCT US";
    document.querySelector("header .outer p").innerHTML = "TOP 10,000 Turkey";
    document.querySelector(".CategoriesSearch .title").innerHTML =
      " Categories";
    document.querySelector(".CategoriesSearch .SearchBlock > p").innerHTML =
      " Search";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:first-of-type > button"
    ).innerHTML = " Please select City";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:last-of-type > button"
    ).innerHTML = " Please select categroy";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:first-of-type .dropdown-menu li:nth-of-type(1) a"
    ).innerHTML = " City1";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:first-of-type .dropdown-menu li:nth-of-type(2) a"
    ).innerHTML = " City2";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:first-of-type .dropdown-menu li:nth-of-type(3) a"
    ).innerHTML = " City3";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:last-of-type .dropdown-menu li:nth-of-type(1) a"
    ).innerHTML = " category1";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:last-of-type .dropdown-menu li:nth-of-type(2) a"
    ).innerHTML = " category2";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:last-of-type .dropdown-menu li:nth-of-type(3) a"
    ).innerHTML = " category3";

    document.querySelector(
      "footer .FstFooter > div > div > div:first-of-type p"
    ).innerHTML =
      "It is a platform for the most important ten thousand factories  and companies operating in Turkey, so that this platform is a gateway for foreign buyers to reach the most important Turkish  factories and companies, according to different fields.";
    document.querySelector(".AllItems .more button:last-of-type").innerHTML =
      "  View All";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(2) p:first-of-type"
    ).innerHTML = "Register As ";

    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(2) p a:first-of-type"
    ).innerHTML = " Company";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(2) p a:last-of-type"
    ).innerHTML = " Bayer";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(3) > p"
    ).innerHTML = "Social Media";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(4) > p"
    ).innerHTML = "Contact Us";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(4) ul li span"
    ).innerHTML = "Turkeya, Istanbul ";
    document.querySelector("footer .SecFooter").innerHTML =
      "All rights reserved to TOP 10,000 Turkeya @ 2022";
    // *************************************************************************
    // for arabic class and texts
  } else {
    localStorage.setItem("language", "AR");
    document.querySelector("body").classList.add("arabic");
    document.querySelector(
      "header .FstHeader .navbar-nav > li:first-of-type"
    ).innerHTML = "سجل ك";
    document.querySelector(
      "header .FstHeader .navbar-nav > li:nth-of-type(2) > a"
    ).innerHTML = " شركة";
    document.querySelector(
      "header .FstHeader .navbar-nav > li:nth-of-type(3) > a"
    ).innerHTML = " مشتري";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(1) p"
    ).innerHTML =
      " أعلى 10,000 شركه <span>تر</span>كيه <br/> ب<span>ح</span>ث شركات <br/> للبحث عن تص<span>ن</span>يفات";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(2) p"
    ).innerHTML =
      " أعلى 10,000 شركه <span>تر</span>كيه <br/> ب<span>ح</span>ث شركات <br/> للبحث عن تص<span>ن</span>يفات";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(3) p"
    ).innerHTML =
      " أعلى 10,000 شركه <span>تر</span>كيه <br/> ب<span>ح</span>ث شركات <br/> للبحث عن تص<span>ن</span>يفات";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(1) a"
    ).innerHTML = "تواصل معنا";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(2) a"
    ).innerHTML = "تواصل معنا";
    document.querySelector(
      "header .SecHeader > div.HeaderSwiper .swiper-slide:nth-of-type(3) a"
    ).innerHTML = "تواصل معنا";
    document.querySelector("header .outer p").innerHTML = " أفضل 10000 تركيا";
    document.querySelector(".CategoriesSearch .title").innerHTML = " التصنيفات";
    document.querySelector(".CategoriesSearch .SearchBlock > p").innerHTML =
      " بحث";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:first-of-type > button"
    ).innerHTML = " الرجاء تحديد المدينة";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:last-of-type > button"
    ).innerHTML = " الرجاء تحديد فئة";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:first-of-type .dropdown-menu li:nth-of-type(1) a"
    ).innerHTML = " مدينه1";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:first-of-type .dropdown-menu li:nth-of-type(2) a"
    ).innerHTML = " مدينه2";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:first-of-type .dropdown-menu li:nth-of-type(3) a"
    ).innerHTML = " مدينه3";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:last-of-type .dropdown-menu li:nth-of-type(1) a"
    ).innerHTML = " فئه1";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:last-of-type .dropdown-menu li:nth-of-type(2) a"
    ).innerHTML = " فئه2";
    document.querySelector(
      ".CategoriesSearch .SearchBlock > div .dropdown:last-of-type .dropdown-menu li:nth-of-type(3) a"
    ).innerHTML = " فئه3";
    document.querySelector(
      "footer .FstFooter > div > div > div:first-of-type p"
    ).innerHTML =
      " إنها منصة لأهم عشرة آلاف مصن  والشركات العاملة في تركيا ، بحيث تكون هذه المنص  بوابة للمشترين الأجانب للوصول إلى أهم الأتراك  المصانع والشركات حسب المجالات المختلفة.";
    document.querySelector(".AllItems .more button:last-of-type").innerHTML =
      " مشاهدة الكل";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(2) p:first-of-type"
    ).innerHTML = "سجل ك";

    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(2) p a:first-of-type"
    ).innerHTML = " شركه";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(2) p a:last-of-type"
    ).innerHTML = " مشتري";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(3) > p"
    ).innerHTML = " وسائل التواصل الاجتماعي";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(4) > p"
    ).innerHTML = " اتصل بنا";
    document.querySelector(
      "footer .FstFooter > div > div > div:nth-of-type(4) ul li span"
    ).innerHTML = "تركيا ، اسطنبول";
    document.querySelector("footer .SecFooter").innerHTML =
      " جميع الحقوق محفوظة لـ TOP 10،000 Turkeya @ 2022 ";
  }
}
