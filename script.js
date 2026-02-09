function Place(location, landmarks, timeOfYear, notes, image) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.image = image;
}

Place.prototype.getLandmarks = function () {
  return this.landmarks.join(", ");
};

// PLACES DATA
const places = [
  new Place(
    "Mombasa",
    ["Indian Ocean", "Fort Jesus"],
    "December",
    "Hot and relaxing. The beach and waves",
    "https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ),
  new Place(
    "Zanzibar",
    ["Stone Town", "Beaches"],
    "August",
    "Beautiful island vibes",
    "https://images.unsplash.com/photo-1711091704998-3bea86948c83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emFuemliYXIlMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D"
  ),
  new Place(
    "Maasai Mara",
    ["Wildlife", "Great Migration"],
    "July",
    "Amazing safari experience. Hot air balloon ride",
    "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFhc2FpJTIwbWFyYXxlbnwwfHwwfHx8MA%3D%3D",
    
  ),
  new Place(
    "Tsavo",
    ["Red Elephants", "National Park"],
    "June",
    "Very scenic and peaceful",
    "https://images.unsplash.com/photo-1732548314474-2aff3b4e8e55?q=80&w=902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )
];

// UI LOGIC
const placesList = document.getElementById("places-list");

function showPlace(place) {
  document.getElementById("detail-location").textContent = place.location;
  document.getElementById("detail-landmarks").textContent = place.getLandmarks();
  document.getElementById("detail-time").textContent = place.timeOfYear;
  document.getElementById("detail-notes").textContent = place.notes;
  document.getElementById("detail-image").src = place.image;
}

// Default view
showPlace(places[0]);

places.forEach(function (place) {
  const li = document.createElement("li");
  li.textContent = place.location;

  li.addEventListener("click", function () {
    showPlace(place);
  });

  placesList.appendChild(li);
});
