
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
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
    "Hot and relaxing. The beach and waves"
  ),
  new Place(
    "Zanzibar",
    ["Stone Town", "Beaches"],
    "August",
    "Beautiful island vibes"
  ),
  new Place(
    "Maasai Mara",
    ["Wildlife", "Great Migration"],
    "July",
    "Amazing safari experience. The hot air balloon experience"
  ),
  new Place(
    "Tsavo",
    ["Red elephants", "National Park"],
    "June",
    "Very scenic and peaceful. The amazing people"
  )
];

// UI LOGIC
const placesList = document.getElementById("places-list");

places.forEach(function (place) {
  const li = document.createElement("li");
  li.textContent = place.location;

  li.addEventListener("click", function () {
    document.getElementById("detail-location").textContent = place.location;
    document.getElementById("detail-landmarks").textContent = place.getLandmarks();
    document.getElementById("detail-time").textContent = place.timeOfYear;
    document.getElementById("detail-notes").textContent = place.notes;
  });

  placesList.appendChild(li);
});

