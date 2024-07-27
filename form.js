function submitAnimate(button) {
  let form = 
  document.getElementById("myForm");

  button.disabled = true;

  form.classList.toggle("load");

  setTimeout(() => {
    form.classList.replace("load","submit");

    setTimeout(() => {
      form.classList.toggle("submit");
      form.submit();
    },1500);
  },1500);
}