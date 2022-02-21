import React from "react";

const NavigationDots = (active) => {
  const dots = ["home", "about", "work", "skills", "testimonials", "contact"];

  return (
    <div className="app__navigation">
      {dots.map((dot, index) => (
        <a
          key={dot + index}
          className="app__navigation-dot"
          style={active === dot ? { backgroundColor: "#313bac" } : {}}
          href={`#${dot}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
