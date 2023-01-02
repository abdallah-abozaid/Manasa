// ---------------------------------language--------------------
if (localStorage.getItem("language") == null) {
  setLang("EN");
} else {
  setLang(localStorage.getItem("language"));
}

function setLang(lang) {
  if (lang == "EN") {
    localStorage.setItem("language", "EN");
    document.querySelector("body").classList.remove("arabic");
    document.querySelector(".SignUp .SignUpForm > p:first-of-type").innerHTML =
      "SIGN UP";
    document.querySelector(".SignUp .SignUpForm > p:last-of-type").innerHTML =
      "Please Sign Up to access to your account";
    document.querySelector(
      ".SignUp .SignUpForm .input:first-of-type > label"
    ).innerHTML = "Full Name";
    document.querySelector(
      ".SignUp .SignUpForm .input:nth-of-type(2) > label"
    ).innerHTML = "Email";
    document.querySelector(
      ".SignUp .SignUpForm .input:nth-of-type(3) > label"
    ).innerHTML = "Phone Number";
    document.querySelector(
      ".SignUp .SignUpForm .input:nth-of-type(4) > label"
    ).innerHTML = "Categories";
    document.querySelector(".SignUp .SignUpForm > a").innerHTML = "SIGN UP";
    document.querySelector(".SignUp .SignUpForm .GoSignIn > p").innerHTML =
      "You Already Account ?";
    document.querySelector(
      ".SignUp .SignUpForm .GoSignIn > div a:first-of-type"
    ).innerHTML = "Sign in a User";
    document.querySelector(
      ".SignUp .SignUpForm .GoSignIn > div a:last-of-type"
    ).innerHTML = "Sign in a Visitor";
    document.querySelector(
      ".SignUp .SignUpForm .input.Categories button"
    ).innerHTML = " Please select category";
    document.querySelector(
      ".SignUp .SignUpForm .input.Categories .dropdown-menu li:nth-of-type(1) a"
    ).innerHTML = "categroy1";
    document.querySelector(
      ".SignUp .SignUpForm .input.Categories .dropdown-menu li:nth-of-type(2) a"
    ).innerHTML = "categroy2";
    document.querySelector(
      ".SignUp .SignUpForm .input.Categories .dropdown-menu li:nth-of-type(3) a"
    ).innerHTML = "categroy3";
    document
      .querySelector(".SignUp .SignUpForm .input:nth-of-type(1) > div > input")
      .setAttribute("placeholder", "Full Name");
    document
      .querySelector(".SignUp .SignUpForm .input:nth-of-type(2) > div > input")
      .setAttribute("placeholder", "Email");
    document
      .querySelector(
        ".SignUp .SignUpForm .input.phone > div > div:last-of-type input"
      )
      .setAttribute("placeholder", "Phone Number");

    // *************************************************************************
  } else {
    localStorage.setItem("language", "AR");
    document.querySelector("body").classList.add("arabic");
    document.querySelector(".SignUp .SignUpForm > p:first-of-type").innerHTML =
      " اشتراك";
    document.querySelector(".SignUp .SignUpForm > p:last-of-type").innerHTML =
      " يرجى التسجيل للوصول إلى حسابك";
    document.querySelector(
      ".SignUp .SignUpForm .input:first-of-type > label"
    ).innerHTML = " الاسم الكامل";
    document.querySelector(
      ".SignUp .SignUpForm .input:nth-of-type(2) > label"
    ).innerHTML = " بريد إلكتروني";
    document.querySelector(
      ".SignUp .SignUpForm .input:nth-of-type(3) > label"
    ).innerHTML = " رقم التليفون";
    document.querySelector(
      ".SignUp .SignUpForm .input:nth-of-type(4) > label"
    ).innerHTML = " التصنيفات";
    document.querySelector(".SignUp .SignUpForm > a").innerHTML = " اشتراك";
    document.querySelector(".SignUp .SignUpForm .GoSignIn > p").innerHTML =
      " أنت بالفعل لديك حساب؟";
    document.querySelector(
      ".SignUp .SignUpForm .GoSignIn > div a:first-of-type"
    ).innerHTML = "تسجيل دخول كمستخدم";
    document.querySelector(
      ".SignUp .SignUpForm .GoSignIn > div a:last-of-type"
    ).innerHTML = "تسجيل دخول كزائر";
    document.querySelector(
      ".SignUp .SignUpForm .input.Categories button"
    ).innerHTML = " الرجاء تحديد الفئة";
    document.querySelector(
      ".SignUp .SignUpForm .input.Categories .dropdown-menu li:nth-of-type(1) a"
    ).innerHTML = "الفئة1";
    document.querySelector(
      ".SignUp .SignUpForm .input.Categories .dropdown-menu li:nth-of-type(2) a"
    ).innerHTML = "الفئة2";
    document.querySelector(
      ".SignUp .SignUpForm .input.Categories .dropdown-menu li:nth-of-type(3) a"
    ).innerHTML = "الفئة3";
    document
      .querySelector(".SignUp .SignUpForm .input:nth-of-type(1) > div > input")
      .setAttribute("placeholder", "الاسم بالكامل");
    document
      .querySelector(".SignUp .SignUpForm .input:nth-of-type(2) > div > input")
      .setAttribute("placeholder", "بريد إلكتروني");
    document
      .querySelector(
        ".SignUp .SignUpForm .input.phone > div > div:last-of-type input"
      )
      .setAttribute("placeholder", "رقم التليفون");
  }
}
