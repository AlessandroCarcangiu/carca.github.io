
// Travel page JS: Leaflet map and cards
// Example places array
const places = [
    // Europe
  {
    name: "Bruxelles, Belgium",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Brugelette, Belgium",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Limassol, Cyprus",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Paris, France",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Munich, Germany",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "London, United Kingdom",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Catania, Italy",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Marostica, Italy",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Padova, Italy",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: ", Italy",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Varsavia, Poland",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Porto, Portugal",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Guimarães, Portugal",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
  {
    name: "Cagliari, Sardinia",
    lat: 39.2238,
    lng: 9.1217,
    img: "https://www.rossocorallo.info/wp-content/uploads/2019/09/hotel-panorama-cagliari-centro-in-sardegna11.jpg",
    desc: "My hometown and university city."
  },
  {
    name: "Barcelona, Spain",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },
    // Africa

    // Asia
  {
    name: "Tokyo, Japan",
    lat: 35.6895,
    lng: 139.6917,
    img: "https://www.shutterstock.com/image-photo/shibuya-crossing-twilight-tokyo-japan-600nw-1608796999.jpg",
    desc: "Skyscrapers, crossing, and nightlife."
  },
  {
    name: "Matsumoto, Japan",
    lat: 36.2381,
    lng: 137.9717,
    img: "https://www.shutterstock.com/shutterstock/videos/1110383129/thumb/1.jpg",
    desc: "Castle, history, and mountains."
  },
  {
    name: "Shirakawa-go, Japan",
    lat: 36.2608,
    lng: 136.8996,
    img: "https://www.shutterstock.com/shutterstock/videos/3653593975/thumb/1.jpg",
    desc: "Farmhouses, heritage, and snow."
  },
  {
    name: "Takayama, Japan",
    lat: 36.1467,
    lng: 137.2517,
    img: "https://media.istockphoto.com/id/521890621/photo/takayama.jpg?s=612x612&w=0&k=20&c=x0Q6bwEHGEdt8cUjXx8E03GwWWN5wF4yOK-f-O3x_XU=",
    desc: "Old town, tradition, and charm."
  },
  {
    name: "Kanazawa, Japan",
    lat: 36.5613,
    lng: 136.6562,
    img: "https://www.shutterstock.com/shutterstock/videos/3709168243/thumb/1.jpg",
    desc: "Garden, samurai, and culture."
  },
  {
    name: "Kyoto, Japan",
    lat: 35.0116,
    lng: 135.7681,
    img: "https://www.shutterstock.com/shutterstock/videos/3826478109/thumb/1.jpg",
    desc: "Temples, gardens, and traditions."
  },
  {
    name: "Nara, Japan",
    lat: 34.6851,
    lng: 135.8048,
    img: "https://media.gettyimages.com/id/675938976/video/asian-deer-during-cherry-blossom-season-japan.jpg?s=640x640&k=20&c=Xw9hS13lAslOkt5NoZI52cQgepiP0xZtccqYOi90vNU=",
    desc: "Deer, temples, and parks."
  },

  // North/South America
  {
    name: "Los Angeles, United States",
    lat: 0,
    lng: 0,
    img: "",
    desc: ""
  },

    // Oceania
];

let mapInstance = null;
function initMap() {
  const mapDiv = document.getElementById('map');
  if (!mapDiv) return;
  // Remove any previous map instance
  if (mapDiv._leaflet_id) {
    mapDiv._leaflet_id = null;
    mapDiv.innerHTML = '';
  }
  // Default: show the world (from North America to New Zealand)
  mapInstance = L.map('map');
  mapInstance.fitBounds([
    [70, -130],   // Alaska/Canada (northwest)
    [-50, 180]    // New Zealand (southeast)
  ]);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapInstance);
  places.forEach((p, i) => {
    const marker = L.marker([p.lat, p.lng]).addTo(mapInstance);
    marker.on('click', () => showPlaceCard(i));
    marker.bindPopup(`<b>${p.name}</b>`);
  });
}

function setupMapButtons() {
  const btnEurope = document.getElementById('btn-europe');
  const btnJapan = document.getElementById('btn-japan');
  const btnAustralia = document.getElementById('btn-australia');
  const btnWorld = document.getElementById('btn-world');
  if (btnEurope) {
    btnEurope.onclick = () => {
      if (mapInstance) {
        // Fit from Iceland to Baghdad
        mapInstance.fitBounds([
          [66, -25],   // Iceland (northwest)
          [33, 45]     // Baghdad (southeast)
        ]);
      }
    };
  }
  if (btnJapan) {
    btnJapan.onclick = () => {
      if (mapInstance) mapInstance.setView([36.2, 138.2], 5); // Japan
    };
  }
  if (btnAustralia) {
    btnAustralia.onclick = () => {
      if (mapInstance) mapInstance.setView([-25, 134], 4); // Australia
    };
  }
  if (btnWorld) {
    btnWorld.onclick = () => {
      if (mapInstance) {
        // Fit from North America to New Zealand
        mapInstance.fitBounds([
          [70, -130],   // Alaska/Canada (northwest)
          [-50, 180]    // New Zealand (southeast)
        ]);
      }
    };
  }
}

function showPlaceCard(idx) {
  // Do nothing: keep all place cards visible
}

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setupMapButtons();
  // Show all places as cards by default
  const cards = document.querySelector('.places-cards');
  if (cards) {
    cards.innerHTML = places.map(p => `
      <div class="place-card">
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </div>
    `).join('');
  }
});
