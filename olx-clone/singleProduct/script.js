let product = window.location.search;
let id = product[product.length - 1];
console.log(id);
let productContainer = document.querySelector("#product-container");

(async function () {
  let res = await fetch(`https://dummyjson.com/products/${id}`);
  let data = await res.json();
  showDetails(data);
  loader.style.display = "none";
})();

function showDetails(data) {
  console.log(data);
  let {
    title,
    price,
    rating,
    description,
    brand,
    stock,
    category,
    shippingInformation,
    warrantyInformation,
    images,
    reviews,
  } = data;
  console.log(images[0]);
  productContainer.innerHTML = `
      <div class="carousel">
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div id="imageDiv" class="carousel-inner">
              
            </div>
            <button class="nextBtn carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="nextBtn carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
      </div>

      <div class="product-details">
        <h2 id="title">${title}</h2>
        <div class="price" id="price">$${price}</div>
        <div class="rating" id="rating">⭐ ${rating}/5 (${reviews.length})</div>

        <p id="description">
          ${description}
        </p>

        <div class="info-grid">
          <span><span class="label">Product ID:</span> #${id}</span>
          <span><span class="label">Brand:</span> ${brand}</span>
          <span><span class="label">Category:</span> ${category}</span>
          <span><span class="label">Stock:</span> ${stock}</span>
          <span
            ><span class="label">Shipping:</span> ${shippingInformation}</span
          >
          <span
            ><span class="label">Warranty:</span> ${warrantyInformation}</span
          >
        </div>
      </div>`;
  let imageContainer = document.querySelector("#imageDiv");
  images.forEach((element) => {
    console.log(element);
    imageContainer.innerHTML += `
              <div class="carousel-item active">
                <img src="${element}" class="d-block w-100" alt="...">
              </div>
        `;
  });
}
window.addEventListener("load", function () {
  loader.style.opacity = "1";
});
