const properties = [
  {
    id: 1,
    img: "./images/ap22.jpg",
    title: "For Rent",
    descr: "New Apartment Nice View",
    amount: 11000,
    beds: 3,
    bathroom: 1,
    cars: 1,
    size: "1789 Sq Ft",
    type:'Condo',
    location: "Chicago"
  },
  {
    id: 2,
    img: "./images/using/ap1.jpg",
    title: "For Rent",
    descr: "Light And Modern Apartment",
    amount: 4500,
    beds: 4,
    bathroom: 2,
    cars: 1,
    size: "1200 Sq Ft",
    type: 'Apartment',
    location: 'Los Angeles'

  },
  {
    id: 3,
    img: "./images/using/ap3.jpg",
    title: "For Rent",
    descr: "Comfortable Apartment",
    amount: 3700,
    beds: 1,
    bathroom: 2,
    cars: 1,
    size: "1900 Sq Ft",
    type:'Villa',
    location:'Miamai'
  },
  {
    id: 4,
    img: "./images/using/apartment-design-impresses-with-innovative-and-sustainable-solutions-0-624859942.jpg",
    title: "For Rent",
    descr: "Relaxing Apartment",
    amount: 2800,
    beds: 1,
    bathroom: 1,
    cars: 1,
    size: "2360 Sq Ft",
    type: 'Apartment',
    location: 'Los Angeles'
  },
  {
    id: 5,
    img: "./images/using/istockphoto-1182454305-612x612.jpg",
    title: "For Rent",
    descr: "Comfortable Apartment",
    amount: 1600,
    beds: 4,
    bathroom: 2,
    cars: 1,
    size: "4300 Sq Ft",
    type:'Condo',
    location:'New York'
  },
  {
    id: 6,
    img: "./images/using/scandinavian-style-apartment-nouvel-interior-5.jpg",
    title: "For Rent",
    descr: "Complex",
    amount: 5600,
    beds: 5,
    bathroom: 3,
    cars: 1,
    size: "3450 Sq Ft",
    type:'Villa',
    location: "Chicago"
  },
  {
    id: 7,
    img: "./images/using/Sleek-and-transitional-modern-apartment-design-scaled.jpg",
    title: "For Rent",
    descr: "Green View Design",
    amount: 3500,
    beds: 1,
    bathroom: 1,
    cars: 1,
    size: "1760 Sq Ft",
    type: "Studio",
    location:'New York'
  },
  {
    id: 8,
    img: "./images/using/sophieeptonphotographyindependentpenthouse-35.jpg",
    title: "For Rent",
    descr: "Modern Loft Apartment",
    amount: 3750,
    beds: 1,
    bathroom: 1,
    cars: 1,
    size: "1678 Sq Ft",
    type: 'Apartment',
    location: 'Los Angeles'
  },
  {
    id: 9,
    img: "./images/using/Stylish-Singapore-Apartment_7.jpg",
    title: "For Rent",
    descr: "Renovated Kitchen Apartment",
    amount: 1890,
    beds: 2,
    bathroom: 2,
    cars: 1,
    size: "1320 Sq Ft",
    type: 'Apartment',
    location:'Miamai'
  },
  {
    id: 10,
    img: "./images/using/z.jpg",
    title: "For Rent",
    descr: "Contemporary Apartment ",
    amount: 13000,
    beds: 3,
    bathroom: 1,
    cars: 1,
    size: "1200 Sq Ft",
    type: "Studio",
    location: "Chicago"
  },
];

// localStorage.clear();

let allProperties = document.getElementById("propertyList");
console.log(allProperties);
let newProperties = JSON.parse(localStorage.getItem("data"))
  ? JSON.parse(localStorage.getItem("data"))
  : properties;

function data(property) {
  const propertyContainer = document.getElementById("propertyList");
  propertyContainer.innerHTML = '';
  property.forEach((e) => {
    propertyContainer.innerHTML += `
    <div class = "col-md-6 d-flex justify-content-center">
      <div style="background: url(${e.img}); background-size:cover;background-repeat:no-repeat" class= "card my-2">
      <div id="hover">
      </div>
        <div class = "card-body">
          <div class = "row justify-content-start align-items-end h-100">
            <div class = "col-md-6">
              <button id = "btn" class ="text-white rounded">${e.title}</button>
              <h5 class = "text-white">${e.descr}</h5>
              <h6 class = " text-white fw-bold">$${e.amount}</h6>
              <div class =" d-flex gap-3">
                <h6 class = "text-white"><i class="fa-solid fa-bed text-white"></i>${e.beds} Bedrooms</h6>
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

data(properties);

function filteredType(e) {
  const type = e.target.value;
  if (type === "all") {
    return data(newProperties);
  }
  const filtered = newProperties.filter((property) =>{
      return property.type === type
  } );
  return data(filtered);
}

function filteredLocation(e) {
  const location = e.target.value;
  if (location === "all") {
    return data(newProperties);
  }
  console.log(filteredLocation)
  const filtered = newProperties.filter((property) =>{
      return property.location === location
  } );
  return data(filtered);
}

function filteredBedroom(e) {
  const beds = e.target.value;
  if (beds === "all") {
    return data(newProperties);
  }
  const filtered = newProperties.filter((property) =>{
      return property.beds == beds
  } );
  return data(filtered);
}

function filteredPrice(e) {
  const amount = e.target.value;
  if (amount === "all") {
    return data(newProperties);
  }
  const filtered = newProperties.filter((property) =>{
      return property.amount <= amount
  } );
  return data(filtered);
}


