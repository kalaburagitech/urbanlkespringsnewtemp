import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc"; // For Google icon button
// import { ReactBits } from "reactbits.dev"; // ReactBits package for beautiful design
import axios from "axios";

const PopupCard = ({ isOpen, closeModal }) => {
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!/^[6789]\d{9}$/.test(contact)) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://reakestateemail.onrender.com/send-email", {
        contact,
      });

      if (response.data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          closeModal();
          setIsSubmitted(false);
        }, 1500);
      } else {
        throw new Error(response.data.message || "Failed to submit details");
      }
    } catch (err) {
      setError("Failed to submit details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={isOpen} onHide={closeModal} centered size="sm">
      <Modal.Body className="d-flex flex-column align-items-center p-4">
        <div className="text-center">
          <img src="/images/logo.png" alt="Logo" className="mb-4" style={{ width: "120px" }} />
          <h3 className="text-xl font-bold text-gray-800">NCC Urban Lake Springs</h3>
          <p className="text-gray-600 mb-3">
            <i className="fas fa-phone mr-2"></i> +91 99452 64555
          </p>
        </div>
        <Form onSubmit={handleSubmit} className="w-full">
          <Form.Group controlId="contact">
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="border-2 p-3 rounded-lg w-full mb-4"
            />
          </Form.Group>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {isSubmitted && <p className="text-green-500 text-center mt-3">Details submitted successfully! ✅</p>}

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-lg ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Submitting..." : "Download Brochure"}
          </Button>

          <Button
            variant="outline-secondary"
            className="w-full mt-3 d-flex align-items-center justify-center gap-3"
          >
            <FcGoogle size={24} /> Continue with Google
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PopupCard;
