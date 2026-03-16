import React, { useState } from "react";
import "./BrowseSingers.css";

const singersData = [
  {
    id: 1,
    name: "Ian Chan",
    image: "/ian.jpg",
    availability: ["Weekdays"],
    genres: ["Pop", "Jazz", "R&B"],
    price: 200,
  },
  {
    id: 2,
    name: "Sabrina Carpenter",
    image: "/sabrina.jpg",
    availability: ["Weekends"],
    genres: ["R&B", "Pop"],
    price: 85,
  },
  {
    id: 3,
    name: "Shiga Lin",
    image: "/shiga.jpg",
    availability: ["Weekdays", "Weekends"],
    genres: ["Pop", "Jazz"],
    price: 95,
  },
  {
    id: 4,
    name: "Joe Jonas",
    image: "/joe.jpg",
    availability: ["Weekdays"],
    genres: ["Jazz", "R&B"],
    price: 75,
  },
  {
    id: 5,
    name: "Teddy Fan",
    image: "/teddy.jpg",
    availability: ["Weekdays", "Weekends"],
    genres: ["Pop"],
    price: 80,
  },
];

export default function BrowseSingers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weekdaysChecked, setWeekdaysChecked] = useState(false);
  const [weekendsChecked, setWeekendsChecked] = useState(false);
  const [rnbChecked, setRnbChecked] = useState(false);
  const [jazzChecked, setJazzChecked] = useState(false);
  const [popChecked, setPopChecked] = useState(false);
  const [maxPrice, setMaxPrice] = useState(200);

  function clearFilters() {
    setSearchTerm("");
    setWeekdaysChecked(false);
    setWeekendsChecked(false);
    setRnbChecked(false);
    setJazzChecked(false);
    setPopChecked(false);
    setMaxPrice(200);
  }

  const filteredSingers = singersData.filter(function (singer) {
    const lowerSearch = searchTerm.toLowerCase();

    const matchesSearch = singer.name.toLowerCase().includes(lowerSearch)

    const matchesAvailability =
      (!weekdaysChecked && !weekendsChecked) ||
      (weekdaysChecked && singer.availability.includes("Weekdays")) ||
      (weekendsChecked && singer.availability.includes("Weekends"));

    const matchesGenre =
      (!rnbChecked && !jazzChecked && !popChecked) ||
      (rnbChecked && singer.genres.includes("R&B")) ||
      (jazzChecked && singer.genres.includes("Jazz")) ||
      (popChecked && singer.genres.includes("Pop"));

    const matchesPrice = singer.price <= maxPrice;

    return (
      matchesSearch && matchesAvailability && matchesGenre && matchesPrice
    );
  });

  return (
    <div className="browse-page">
      <header className="browse-header">
        <h1 className="logo">NoteMyWords</h1>
        <button className="book-btn">Book Now</button>
      </header>

      <div className="browse-content">
        <aside className="filter-panel">
        <div className="filter-header">
          <h2>Filter</h2>
          <button className="clear-btn" onClick={clearFilters}>Remove all</button>
        </div>
          
          <div className="filter-group">
            <h3>Availability</h3>

            <label>
              <input
                type="checkbox"
                checked={weekdaysChecked}
                onChange={() => setWeekdaysChecked(!weekdaysChecked)}
              />
              Weekdays
            </label>

            <label>
              <input
                type="checkbox"
                checked={weekendsChecked}
                onChange={() => setWeekendsChecked(!weekendsChecked)}
              />
              Weekends
            </label>
          </div>

          <div className="filter-group">
            <h3>Price</h3>
            <p>0 - {maxPrice}</p>
            <input
              type="range"
              min="0"
              max="200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="price-slider"
            />
          </div>

          <div className="filter-group">
            <h3>Type of Music</h3>

            <label>
              <input
                type="checkbox"
                checked={rnbChecked}
                onChange={() => setRnbChecked(!rnbChecked)}
              />
              R&B
            </label>

            <label>
              <input
                type="checkbox"
                checked={jazzChecked}
                onChange={() => setJazzChecked(!jazzChecked)}
              />
              Jazz
            </label>

            <label>
              <input
                type="checkbox"
                checked={popChecked}
                onChange={() => setPopChecked(!popChecked)}
              />
              Pop
            </label>
          </div>
        </aside>

        <main className="main-section">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Enter singer name"
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="card-grid">
            {filteredSingers.length > 0 ? (
              filteredSingers.map(function (singer) {
                return (
                  <div className="singer-card" key={singer.id}>
                    <img
                      src={singer.image}
                      alt={singer.name}
                      className="singer-image"
                    />

                    <div className="singer-info">
                      <h4>{singer.name}</h4>
                      <ul>
                        <li>
                          Available{" "}
                          {singer.availability.join(", ").toLowerCase()}
                        </li>
                        <li>{singer.genres.join(", ")}</li>
                        <li>${singer.price}/hour</li>
                      </ul>
                    </div>

                    <button className="learn-btn">Learn More</button>
                  </div>
                );
              })
            ) : (

              // If no singers match the filters, show a message
              <p className="no-results">No singers match your filters.</p>
            )}
          </div>
        </main>
      </div>

      
    </div>
  );
}