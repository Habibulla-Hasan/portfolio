// navigation mobile menu script
var menu_bar = document.getElementById("menu_bar");
var menu_close = document.getElementById("menu_close");
var mobile_nav = document.getElementById("mobile_nav");
var brands_blur = document.getElementById("brands");
var main_blur = document.getElementById("main");
menu_bar.addEventListener("click", () => {
  mobile_nav.classList.add("mobile_menu_active");
  main_blur.classList.add("blur");
  brands_blur.classList.add("blur");
});
menu_close.addEventListener("click", () => {
  mobile_nav.classList.remove("mobile_menu_active");
  main_blur.classList.remove("blur");
  brands_blur.classList.remove("blur");
});

// copy contact us section
function copyCode() {
  const codeExample = document.getElementById("code-example").innerText;
  const textArea = document.createElement("textarea");
  textArea.value = codeExample;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  // Change button text and color to indicate success
  const copyButton = document.getElementById("copy-button");
  copyButton.innerText = "Copied!";
  copyButton.style.color = "#db7093";
  setTimeout(() => {
    copyButton.innerHTML = "<i class='fa fa-copy'></i>";
    copyButton.style.color = "";
  }, 1000);
}
// copy contact us section
function copyCode2() {
  const codeExample2 = document.getElementById("code-example2").innerText;
  const textArea = document.createElement("textarea");
  textArea.value = codeExample2;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  // Change button text and color to indicate success
  const copyButton2 = document.getElementById("copy-button2");
  copyButton2.innerText = "Copied!";
  copyButton2.style.color = "#db7093";
  setTimeout(() => {
    copyButton2.innerHTML = "<i class='fa fa-copy'></i>";
    copyButton2.style.color = "";
  }, 1000);
}
