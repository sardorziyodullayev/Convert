var elSiteForm = document.querySelector(".site-form");
var elSiteInput = elSiteForm.querySelector(".input-form");
var elSiteSelect = elSiteForm.querySelector(".input-select");

var elSiteOutput = document.querySelector(".form-output");
var elTextTicket = document.querySelector(".convert-text");

var ticketPrice = 300;
var hotelPrice = 250;
var travelPrice = 150;

elSiteForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = Number(elSiteInput.value);
  var selectValue = Number(elSiteSelect.value);

  if (inputValue <= 0) {
    elSiteOutput.textContent = "0 yoki undan kichik raqam kiritidingiz.";
    return;
  } else if (isNaN(inputValue)) {
    elSiteOutput.textContent = "Raqam kiriting";
    return;
  } else if (isNaN(selectValue)) {
    elSiteOutput.textContent = "Iltimos, valyuta turini tanlang.";
    return;
  }

  var convertResult = (inputValue / selectValue).toFixed(2);

  if (selectValue === 10885 && convertResult > 300) {
    elTextTicket.textContent = "Biletga pulingiz yetadi.";
  } else if (selectValue === 10500 && convertResult > 250) {
    elTextTicket.textContent = "Mehmonxonaga pulingiz yetadi.";
  } else if (selectValue === 450 && convertResult > 150) {
    elTextTicket.textContent = "Sayohatga pulingiz yetadi.";
  } else {
    elTextTicket.textContent = "Pulingiz yetmaydi."
  }

  elSiteOutput.textContent = convertResult;
});
