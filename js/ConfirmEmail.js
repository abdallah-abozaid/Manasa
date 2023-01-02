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
    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm > p:first-of-type"
    ).innerHTML = "CONFIRM YOUR EMAIL";

    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm .input:first-of-type > label"
    ).innerHTML = "Enter 6 digits code";
    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm .btns button:last-of-type"
    ).innerHTML = "NEXT";
    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm .btns button:first-of-type"
    ).innerHTML = "BACK";
    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm > p:last-of-type"
    ).innerHTML =
      "Can’t find confirmation email? <a href='./SignUp.html'>Resend code </a>";

    // *************************************************************************
  } else {
    localStorage.setItem("language", "AR");
    document.querySelector("body").classList.add("arabic");
    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm > p:first-of-type"
    ).innerHTML = " قم بتأكيد بريدك الإلكتروني";

    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm .input:first-of-type > label"
    ).innerHTML = " أدخل الرمز المكون من 6 أرقام";
    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm .btns button:last-of-type"
    ).innerHTML = "التالي";
    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm .btns button:first-of-type"
    ).innerHTML = "السابق";
    document.querySelector(
      ".ConfirmEmail .ConfirmEmailForm > p:last-of-type"
    ).innerHTML =
      "لا يمكنك العثور على البريد الإلكتروني للتأكيد؟ <a href='./SignUp.html'>أعد إرسال الرمز </a>";
  }
}
