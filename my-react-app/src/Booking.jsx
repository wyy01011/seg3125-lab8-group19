import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { singersData } from "./BrowseSingers";
import "./Contact.css";

export default function Booking() {
  const { id } = useParams();
  const singer = singersData.find((s) => s.id === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    eventLocation: "",
    eventType: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!singer) {
    return (
      <div className="contact-page">
        <h2>Singer not found.</h2>
        <Link to="/browse">Back to Browse</Link>
      </div>
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <h1>Book {singer.name}</h1>

      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        You are sending a booking request for {singer.name}. Hope you enjoy that!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Your Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event Date
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event Location
          <input
            type="text"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event Type
          <input
            type="text"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Additional Notes
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Booking Request</button>
      </form>

      {submitted && (
        <p style={{ marginTop: "20px", textAlign: "center", fontWeight: "bold" }}>
          Booking request submitted successfully. Hope you enjoy that!
        </p>
      )}

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/browse" className="detail-back-btn">
          Back to Browse
        </Link>
      </div>
    </div>
  );
}