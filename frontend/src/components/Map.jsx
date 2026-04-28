export default function Map() {
  return (
    <div style={{ padding: "60px 40px" }}>
      <h2 style={{ textAlign: "center" }}>Visit Our Clinic</h2>

      <div style={{ marginTop: "20px", borderRadius: "10px", overflow: "hidden" }}>
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps?q=Park+Medical+Centre+PMC+Parklands+Nairobi&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}