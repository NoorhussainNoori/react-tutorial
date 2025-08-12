const Contact = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(102,166,255,0.15)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2
          style={{
            marginBottom: "1.5rem",
            color: "#66a6ff",
            textAlign: "center",
          }}
        >
          Contact Us
        </h2>
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{ display: "block", marginBottom: ".5rem", color: "#333" }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: ".75rem",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{ display: "block", marginBottom: ".5rem", color: "#333" }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: ".75rem",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{ display: "block", marginBottom: ".5rem", color: "#333" }}
            >
              Message
            </label>
            <textarea
              placeholder="Your Message"
              rows={4}
              style={{
                width: "100%",
                padding: ".75rem",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: ".75rem",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(90deg, #66a6ff 0%, #89f7fe 100%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(102,166,255,0.15)",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
