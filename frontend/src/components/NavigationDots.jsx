import React from "react";

const NavigationDots = (active) => {
  const items = ["home", "about", "work", "skills", "testimonials", "contact"];

  return (
    <div className="app__navigation">
      {items.map((item, index) => (
        <a
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313b1c" } : {}}
          href={`#${item}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
