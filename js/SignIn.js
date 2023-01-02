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
    document.querySelector(".SignIn .SignInForm > p:first-of-type").innerHTML =
      "SIGN IN";
    document.querySelector(".SignIn .SignInForm > p:last-of-type").innerHTML =
      "Please Sign Up to access to your account";
    document.querySelector(
      ".SignIn .SignInForm .input:first-of-type > label"
    ).innerHTML = "Full Name";
    document.querySelector(
      ".SignIn .SignInForm .input:nth-of-type(2) > label"
    ).innerHTML = "Email";

    document.querySelector(".SignIn .SignInForm > a").innerHTML = "SIGN IN";
    document.querySelector(".SignIn .SignInForm .GoSignIn > p").innerHTML =
      "Don’t have an account? <a href='./SignUp.html'>Sign Up </a>";
    document
      .querySelector(".SignIn .SignInForm .input:nth-of-type(1) > div > input")
      .setAttribute("placeholder", "Full Name");
    document
      .querySelector(".SignIn .SignInForm .input:nth-of-type(2) > div > input")
      .setAttribute("placeholder", "Email");

    // *************************************************************************
  } else {
    localStorage.setItem("language", "AR");
    document.querySelector("body").classList.add("arabic");
    document.querySelector(".SignIn .SignInForm > p:first-of-type").innerHTML =
      " تسجيل الدخول";
    document.querySelector(".SignIn .SignInForm > p:last-of-type").innerHTML =
      " يرجى التسجيل للوصول إلى حسابك";
    document.querySelector(
      ".SignIn .SignInForm .input:first-of-type > label"
    ).innerHTML = " الاسم الكامل";
    document.querySelector(
      ".SignIn .SignInForm .input:nth-of-type(2) > label"
    ).innerHTML = " بريد إلكتروني";

    document.querySelector(".SignIn .SignInForm > a").innerHTML =
      " تسجيل الدخول";
    document.querySelector(".SignIn .SignInForm .GoSignIn > p").innerHTML =
      "ليس لديك حساب؟ <a href='./SignUp.html'>اشتراك </a>";

    document
      .querySelector(".SignIn .SignInForm .input:nth-of-type(1) > div > input")
      .setAttribute("placeholder", "الاسم بالكامل");
    document
      .querySelector(".SignIn .SignInForm .input:nth-of-type(2) > div > input")
      .setAttribute("placeholder", "بريد إلكتروني");
  }
}
