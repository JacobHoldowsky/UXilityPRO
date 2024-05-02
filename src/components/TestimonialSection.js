import React from "react";
import "./TestimonialSection.css";

function TestimonialsSection() {
  // Dummy data for testimonials (replace with actual data)
  const testimonials = [
    {
      id: 1,
      text: "Working with UXilityPRO was an absolute pleasure. From the initial consultation to the final delivery, they displayed professionalism, creativity, and a deep understanding of our needs. The website crafted for us not only exceeded our expectations but also helped elevate our online presence significantly. The attention to detail and commitment to excellence truly sets them apart. We highly recommend UXilityPRO to anyone seeking exceptional web solutions.",
      author: "Chana T.",
      website: "https://www.prettypresentsbychana.com",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">- {testimonial.author}</p>
            <div className="rating">
              {[...Array(5)].map((star, index) => (
                <span key={index} className={index < 3 ? "filled" : ""}>
                  ★
                </span>
              ))}
            </div>
            <p>
              <a href={testimonial.website}>Visit the Website</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
