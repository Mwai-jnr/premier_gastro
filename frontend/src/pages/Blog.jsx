import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section style={section}>
      
      <div style={header}>
        <h1 style={title}>Health Articles</h1>
        <p style={subtitle}>
          Insights and expert advice on digestive health
        </p>
      </div>

      <div style={blogGrid}>
        {blogs.map((b, i) => (
          <div
            key={i}
            style={blogCard}
            className="blog-card"
            onClick={() => navigate(`/blog/${i}`)}
          >

            {/* IMAGE */}
            <img src={b.image} alt="" style={image} />

            {/* DATE */}
            <div style={dateBox}>
              <span>{b.day}</span>
              <small>{b.month}</small>
            </div>

            <h3>{b.title}</h3>
            <p style={desc}>{b.desc}</p>

            <span style={readMore}>Read More →</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const section = {
  padding: "80px 20px",
  background: "var(--light)"
};

const header = {
  textAlign: "center",
  marginBottom: "40px"
};

const title = {
  fontSize: "32px",
  fontWeight: "700"
};

const subtitle = {
  color: "#64748b",
  marginTop: "10px"
};

const blogGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  maxWidth: "1100px",
  margin: "auto"
};

const blogCard = {
  padding: "25px",
  background: "#ffffff",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "all 0.3s ease",
  cursor: "pointer"
};

const dateBox = {
  background: "var(--gradient)",
  color: "white",
  padding: "10px",
  borderRadius: "8px",
  width: "60px",
  textAlign: "center",
  marginBottom: "15px"
};

const desc = {
  color: "#64748b",
  fontSize: "14px"
};

const readMore = {
  marginTop: "15px",
  background: "none",
  color: "var(--primary)",
  border: "none",
  cursor: "pointer",
  fontWeight: "600"
};

// const blogs = [
//   {
//     day: "12",
//     month: "Aug",
//     title: "Understanding Acid Reflux",
//     desc: "Learn causes and treatments.",
//     image: "/images/blog1.jpg"
//   },
//   {
//     day: "05",
//     month: "Sep",
//     title: "Digestive Health Tips",
//     desc: "Simple habits for gut health.",
//     image: "/images/blog2.jpg"
//   }
// ];

const image = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "15px"
};

