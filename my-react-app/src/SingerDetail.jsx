import React from "react";
import { useParams, Link } from "react-router-dom";
import { singersData } from "./BrowseSingers";
import "./BrowseSingers.css";

export default function SingerDetail() {
  const { id } = useParams();
  const singer = singersData.find((s) => s.id === Number(id));

  if (!singer) {
    return (
      <div className="singer-detail-page">
        <h2>Singer not found.</h2>
        <Link to="/browse" className="learn-btn">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="singer-detail-page">
      <div className="singer-detail-card">
        <img
          src={singer.image}
          alt={singer.name}
          className="singer-image-detail"
        />

        <div className="singer-detail-info">
          <h2>{singer.name}</h2>

          <p>
            <strong>Availability:</strong> {singer.availability.join(", ")}
          </p>

          <p>
            <strong>Genres:</strong> {singer.genres.join(", ")}
          </p>

          <p>
            <strong>Price:</strong> ${singer.price}/hour
          </p>

          <p>
            <strong>About:</strong> This singer is available for event bookings
            and can perform according to the genres and availability listed
            above.
          </p>

          <div className="detail-actions">
            <Link to="/browse" className="learn-btn">
              Back
            </Link>

            <Link to={`/booking/${singer.id}`} className="book-btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}