import React from "react";

function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#111", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "#111", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
        
        <h1 style={{ textAlign: "center", color: "skyblue", fontSize: "2.5rem", marginBottom: "20px" }}>
          <b>About Us</b>
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "white", marginBottom: "20px" }}>
          Welcome to <strong>Codify</strong> — your all-in-one online coding platform! Our mission is to make coding accessible and enjoyable for everyone.  
          We support a variety of programming languages and offer tools that help you learn, write, and test code easily — right in your browser.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "white", marginBottom: "20px" }}>
          Whether you're a beginner taking your first steps into the world of programming or an experienced developer working on complex projects,  
          our platform provides a smooth, fast, and collaborative environment to bring your ideas to life.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "white", marginBottom: "20px" }}>
          <strong>Languages We Support:</strong>  
          <u>Java, Python, C++, JavaScript, HTML, CSS, React, PHP, TypeScript, Kotlin, and more.</u>  
          We are continuously adding support for more languages to match the evolving needs of developers worldwide.
        </p>

        <h2 style={{ color: "skyblue", marginTop: "30px", marginBottom: "15px" }}>🌟 Our Vision</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "white", marginBottom: "20px" }}>
          We believe in a future where coding is collaborative, instant, and beginner-friendly.  
          Our platform encourages innovation, learning, and the sharing of ideas between developers across the globe.
        </p>

        <h2 style={{ color: "skyblue", marginTop: "30px", marginBottom: "15px" }}>🚀 What We Offer</h2>
        <ul style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "white", paddingLeft: "20px" }}>
          <li>Real-time code execution and instant output.</li>
          <li>Beginner-friendly interface with professional-grade features.</li>
          <li>Support for multiple programming languages and frameworks.</li>
          <li>Search and explore coding challenges to sharpen your skills.</li>
          <li>Collaborative tools for pair programming and group projects.</li>
        </ul>

        <h2 style={{ color: "skyblue", marginTop: "30px", marginBottom: "15px" }}>📩 Contact Us</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "white" }}>
          Have questions, feedback, or ideas? We’d love to hear from you!  
          Reach out to us at <a href="mailto:support@codify.com" style={{ color: "#2980b9", textDecoration: "none" }}>support@codify.com</a>.
        </p>
      </div>
    </div>
  );
}

export default About;