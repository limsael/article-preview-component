const shareBtn = document.getElementById("share-icon");
const shareOpenBtn = document.getElementById("share-icon-open");
const cardSocial = document.getElementById("card-social");

shareBtn.addEventListener("click", () => {
  cardSocial.classList.toggle("visible");
});

shareOpenBtn.addEventListener("click", () => {
  cardSocial.classList.toggle("visible");
});
