import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetail() {
 const { id } = useParams();
 const index = Number(id);
const blog = blogs[index];

if (isNaN(index) || !blog) {
  return <p style={{ padding: "80px", textAlign: "center" }}>Blog not found</p>;
}
  return (
    <section style={section}>
        <button onClick={() => window.history.back()} style={backBtn}>
  ← Back to Blog
</button>
      <img src={blog.image} style={heroImg} />

      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
  {blog.title}
</h1>

      <p style={meta}>
        {blog.day} {blog.month}
      </p>

      <p style={content}>
        {blog.desc}
      </p>
    </section>
  );
}

const section = {
  padding: "80px 20px",
  maxWidth: "900px",
  margin: "auto"
};

const heroImg = {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "12px",
  marginBottom: "20px"
};

const meta = {
  color: "#64748b",
  marginBottom: "20px"
};

const content = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#1e293b"
};

const backBtn = {
  marginBottom: "20px",
  background: "none",
  border: "none",
  color: "#0ea5e9",
  cursor: "pointer",
  fontWeight: "600"
};