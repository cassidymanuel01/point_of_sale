const properties = [
  {
    id: 1,
    img: "../images/using/400_modern_apartment_design.jpg",
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
    img: "https://postimg.cc/pyyZk7xg",
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
    img: "https://postimg.cc/0M1CQ5hm",
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
    img: "https://postimg.cc/68DxcS8c",
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
    img: "https://postimg.cc/gXm5BPmV",
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
    img: "https://postimg.cc/NLVDKwSd",
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
    img: "https://postimg.cc/t7LdXNnf",
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
    img: "https://postimg.cc/MMnRwn6q",
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
    img: "https://postimg.cc/PCfChCy9",
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
    img: "https://postimg.cc/SXy7BQYx",
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

function data() {
const propertyContainer = document.getElementById("propertyList");
properties.forEach((e) => {
  propertyContainer.innerHTML += `
        <div class = "card my-2">
        <div class = "card-body">
        <div class = "card-img">
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

// console.log(newProperties);

function editData() {
  let edit = document.getElementById("edit").value;
  newProperties.push({
    id: newProperties.length + 1,
    item: edit,
  });
  add();
  localStorage.setItem("data", JSON.stringify(newProperties));
}

function deleteData(event) {
  event.target.parentElement.remove();
}

// function search() {
//     allProperties.innerHTML = ''
//     let search = newProperties.filter((e) => {

//     })
// }

// function search() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("btnSearch");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("propertyList");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// };
