document.addEventListener("DOMContentLoaded", () => {
  // Usamos aserciones de tipo para que TS sepa qué elemento es
  const addToCartBtn = document.getElementById("add-to-cart-btn") as HTMLButtonElement | null;
  const favBtn = document.getElementById("fav-btn") as HTMLButtonElement | null;
  const submitReviewBtn = document.getElementById("btn-submit-review") as HTMLButtonElement | null;

  // Siempre conviene chequear que no sean null
  addToCartBtn?.addEventListener("click", () => {
    alert("¡Juego añadido al carrito exitosamente!");
  });

  favBtn?.addEventListener("click", () => {
    favBtn.classList.toggle("active");
  });

  submitReviewBtn?.addEventListener("click", () => {
    alert("Gracias por tu reseña (Demostración visual).");
  });
});