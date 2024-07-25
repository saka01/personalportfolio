import React, { useState } from "react";
import Link from "next/link";

const EmailPrompt = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic (e.g., send email, display resume link, etc.)
    console.log("Email submitted:", email);
    // Close the modal after submission
    setShowModal(false);
  };

  return (
    <>
     
        <div className="icon-container" style={{cursor: "pointer"}} onClick={() => setShowModal(true)}>
          <p>View My Resume</p>
        </div>


      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>Get My Resume</h2>

            <form onSubmit={handleSubmit}>
              <label style={styles.label}>
               Please Enter your email to receive my detailed resume:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{ ...styles.button, ...styles.cancelButton }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "black",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    color:  "black",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "green",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    margin: "0 5px",
  },
  cancelButton: {
    backgroundColor: "grey",
  },
};

export default EmailPrompt;
