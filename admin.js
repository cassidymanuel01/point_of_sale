const properties = [{
  id: 1,
  img: "./images/ap22.jpg",
  title: "For Rent",
  descr: "New Apartment Nice View",
  amount: "$11,000/mo",
  beds: 3,
  bathroom: 1,
  cars: 1,
  size: "1789 Sq Ft",
},
{
  id: 2,
  img: "./images/using/ap1.jpg",
  title: "For Rent",
  descr: "Light And Modern Apartment",
  amount: "$4,500/mo",
  beds: 4,
  bathroom: 2,
  cars: 1,
  size: "1200 Sq Ft",
},
{
  id: 3,
  img: "./images/using/ap3.jpg",
  title: "For Rent",
  descr: "Comfortable Apartment",
  amount: "$3,700/mo",
  beds: 1,
  bathroom: 2,
  cars: 1,
  size: "1900 Sq Ft",
},
{
  id: 4,
  img: "./images/using/apartment-design-impresses-with-innovative-and-sustainable-solutions-0-624859942.jpg",
  title: "For Rent",
  descr: "Relaxing Apartment",
  amount: "$2,800/mo",
  beds: 1,
  bathroom: 1,
  cars: 1,
  size: "2360 Sq Ft",
},
{
  id: 5,
  img: "./images/using/istockphoto-1182454305-612x612.jpg",
  title: "For Rent",
  descr: "Comfortable Apartment",
  amount: "$1,600/mo",
  beds: 4,
  bathroom: 2,
  cars: 1,
  size: "4300 Sq Ft",
},
{
  id: 6,
  img: "./images/using/scandinavian-style-apartment-nouvel-interior-5.jpg",
  title: "For Rent",
  descr: "Complex",
  amount: "$5,600/mo",
  beds: 5,
  bathroom: 3,
  cars: 1,
  size: "3450 Sq Ft",
},
{
  id: 7,
  img: "./images/using/Sleek-and-transitional-modern-apartment-design-scaled.jpg",
  title: "For Rent",
  descr: "Green View Design",
  amount: "$3,500/mo",
  beds: 1,
  bathroom: 1,
  cars: 1,
  size: "1760 Sq Ft",
},
{
  id: 8,
  img: "./images/using/sophieeptonphotographyindependentpenthouse-35.jpg",
  title: "For Rent",
  descr: "Modern Loft Apartment",
  amount: "$3,750/mo",
  beds: 1,
  bathroom: 1,
  cars: 1,
  size: "1678 Sq Ft",
},
{
  id: 9,
  img: "./images/using/Stylish-Singapore-Apartment_7.jpg",
  title: "For Rent",
  descr: "Renovated Kitchen Apartment",
  amount: "$1,890/mo",
  beds: 2,
  bathroom: 2,
  cars: 1,
  size: "1320 Sq Ft",
},
{
  id: 10,
  img: "./images/using/z.jpg",
  title: "For Rent",
  descr: "Contemporary Apartment ",
  amount: "$13,000/mo",
  beds: 3,
  bathroom: 1,
  cars: 1,
  size: "1200 Sq Ft",
}
];

let allProperties = document.getElementById("propertyList");
console.log(allProperties);
let newProperties = JSON.parse(localStorage.getItem("data"))
  ? JSON.parse(localStorage.getItem("data"))
  : [];

function addData() {
const propertyContainer = document.getElementById("propertyList");
properties.forEach((e) => {
  propertyContainer.innerHTML += `
        <div class = "container my-2">
        <h3>Products</h3>
        <p>Get Best Advertiser In Your Side Pocket</p>
        <div class = "conatiner">
        <div class = "row">
        <div class = "col-md-2">
        <h5 class = "fw-bold">ID</h5>
        <li>${e.id}</li>
        </div>
        <div class = "col-md-2">
        <h5 class = "fw-bold">TITLE</h5>
        <img src = "${e.img}" alt ="${e.title}"/>
        <li>${e.descr}</li>
        </div>
        <div class = "col-md-2">

        </div>
        <div class = "col-md-2">

        </div>
        <div class = "col-md-2">

        </div>
        <div class = "col-md-2">
        
        </div>
        </div>
        </div>`;
})
};

addData();