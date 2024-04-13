const customViewBtn = document.querySelector(".custom-view-modal"),
  customPopup = document.querySelector(".custom-popup"),
  customClose = customPopup.querySelector(".custom-close"),
  customField = customPopup.querySelector(".custom-field"),
  customInput = customField.querySelector("input"),
  customCopy = customField.querySelector("button");

customViewBtn.onclick = () => {
  customPopup.classList.toggle("show");
};
customClose.onclick = () => {
  customViewBtn.click();
};

customCopy.onclick = () => {
  customInput.select(); //select input value
  if (document.execCommand("copy")) {
    //if the selected text copy
    customField.classList.add("active");
    customCopy.innerText = "Copied";
    setTimeout(() => {
      window.getSelection().removeAllRanges(); //remove selection from document
      customField.classList.remove("active");
      customCopy.innerText = "Copy";
    }, 3000);
  }
};