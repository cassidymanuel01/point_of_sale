let allProperties = document.getElementById("propertyList");
console.log(allProperties);
let newProperties = JSON.parse(localStorage.getItem("data"))
  ? JSON.parse(localStorage.getItem("data"))
  : [];

function data() {
const propertyContainer = document.getElementById("propertyList");
properties.forEach((e) => {
  propertyContainer.innerHTML += `
        <div class = "container my-2">
        <h3>Products</h3>
        <p>Get Best Advertiser In Your Side Pocket</p>
        <div class = "">
        <div class = "">
        <img class ="w-100 img-fliud" scr=${e.img} alt ="${e.title} image"/>
        </div>
        <div class = "row">
        <div class = "col-md-6">
        <button id = "btn" class ="btn-primary">${e.title}</button>
        <h5>${e.descr}</h5>
        <h6 class = "fw-bold">${e.amount}</h6>
        <div class =" d-flex gap-3">
        <h6><i class="fa-solid fa-bed"></i>${e.beds}</h6>
        <h6><i class="fa-solid fa-bath"></i>${e.bathroom}</h6>
        <h6><i class="fa-solid fa-car"></i>${e.cars}</h6>
        <h6><i class="bi bi-building fw-bold"></i>${e.size}</h6>
        </div>
        </div>
        </div>
        </div>
        </div>`;
})
};

data();