const properties = [
  {
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
  },
];

let allProperties = document.getElementById("propertyList");
console.log(allProperties);
let newProperties = JSON.parse(localStorage.getItem("data"))
  ? JSON.parse(localStorage.getItem("data"))
  : [];

function data() {
  const propertyContainer = document.getElementById("propertyList");
  properties.forEach((e) => {
    console.log(e);
    propertyContainer.innerHTML += `
    <div class = "col-md-6 d-flex justify-content-center">
      <div style="background: url(${e.img}); background-size:cover;background-repeat:no-repeat" class = "card my-2">
        <div class = "card-body">
          <div class = "row justify-content-start align-items-end h-100">
            <div class = "col-md-6">
              <button id = "btn" class ="text-white">${e.title}</button>
              <h5 class = "text-white">${e.descr}</h5>
              <h6 class = " text-white fw-bold">${e.amount}</h6>
              <div class =" d-flex gap-3">
                <h6 class = "text-white"><i class="fa-solid fa-bed text-white"></i>${e.beds}</h6>
                <h6 class = "text-white"><i class="fa-solid fa-bath text-white"></i>${e.bathroom}</h6>
                <h6 class = "text-white"><i class="fa-solid fa-car text-white"></i>${e.cars}</h6>
                <h6 class = "text-white"><i class="bi bi-building fw-bold text-white"></i>${e.size}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  });
}

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

function search() {
    allProperties.innerHTML = ''
    let search = newProperties.filter((e) => {
      
    })
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("btnSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("propertyList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};
