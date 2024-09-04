import React from "react";
import "./TestimonialSection.css";

function TestimonialsSection() {
  // Dummy data for testimonials (replace with actual data)
  const testimonials = [
    {
      id: 1,
      text: "Working with UXilityPRO was an absolute pleasure. From the initial consultation to the final delivery, they displayed professionalism, creativity, and a deep understanding of my needs. The website crafted for me not only exceeded my expectations but also helped elevate my online presence significantly. The attention to detail and commitment to excellence truly sets them apart. I highly recommend UXilityPRO to anyone seeking exceptional web solutions.",
      author: "Chana T.",
      website: "https://www.prettypresentsbychana.com",
      logo: "prettyPresentsLogo-min.png", // Add the path to the logo image here
    },
    {
      id: 2,
      text: "UXilityPRO transformed my vision into reality with a stunning website that perfectly captures my brand's essence. They were attentive, innovative, and highly responsive throughout the entire process. The final product not only looks fantastic but also performs seamlessly, providing an exceptional user experience. Their expertise in web design and development truly shines, and I couldn’t be happier with the results. I highly recommend UXilityPRO for anyone looking to elevate their digital presence.",
      author: "Batya S.",
      website: "https://www.tandbeeliquidgold.com",
      logo: "prettyPresentsLogo-min.png", // Add the path to the logo image here
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
            {/* <img
              src={testimonial.logo}
              alt="Website Logo"
              className="website-logo"
            /> */}
            <p>
              <a
                href={testimonial.website}
                target="_blank"
                rel="noopener noreferrer"
                className="site-link"
              >
                Visit the Website
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
