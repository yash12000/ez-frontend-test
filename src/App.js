"use client";

import { useState } from "react";
import "./App.css";
import logo from "../src/assets/ez-works-logo.png";
import presentationIcon from "../src/assets/presentation.png";
import audioVisualIcon from "../src/assets/audio-visual.png";
import translationIcon from "../src/assets/translation.png";
import graphicIcon from "../src/assets/graphic.png";
import researchIcon from "../src/assets/research.png";
import dataIcon from "../src/assets/data.png";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setError("");
    setSuccess(false);

    // Validate empty submission
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setSuccess(true);
        setEmail("");
      } else if (response.status === 422) {
        setError(data.message || "Invalid email domain");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: presentationIcon,
      title: "Presentation Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      icon: audioVisualIcon,
      title: "Audio - Visual Production",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      icon: translationIcon,
      title: "Translation Services",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      icon: graphicIcon,
      title: "Graphic",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      icon: researchIcon,
      title: "Research & Analytics",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      icon: dataIcon,
      title: "Data Processing",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Logo and Header */}
        <div className="header-section">
          <div className="logo-container">
            <img
              src={logo || "/placeholder.svg"}
              alt="EZ Works Logo"
              className="logo"
            />
          </div>
          <h1 className="main-heading">Suite Of Business Support Services</h1>
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-container">
              <input
                type="text"
                value={success ? "Form Submitted" : email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={success || isSubmitting}
                placeholder="Email Address"
                className={`email-input ${error ? "error-input" : ""}`}
              />
              {error && <p className="error-message">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || success}
              className="submit-button"
            >
              {isSubmitting ? "Submitting..." : "Contact Me"}
            </button>
          </form>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <img
                  src={service.icon || "/placeholder.png"}
                  alt={service.title}
                  className="service-icon"
                />
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
