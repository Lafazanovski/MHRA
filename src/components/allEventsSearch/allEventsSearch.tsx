import React, { useState } from "react";

const navButtons = [
  { label: "Сите", target: "/" },
  { label: "HR Кафе", target: "hr-kafe" },
  { label: "HR Викенд", target: "hr-vikend" },
  { label: "HR Вебинар", target: "hr-vebinar" },
  { label: "HR Конференции", target: "hr-konferencii" },
];

const AllEventsSearch = () => {
  const [active, setActive] = useState("Сите");

  const handleClick = (label: string, target: string) => {
    setActive(label);

    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="allEventsSearchSection">
        <div className="allEventsSearchContainer wrapper">
          <div className="allEventsNavbarDiv">
            {navButtons.map((btn) => (
              <button
                key={btn.label}
                className={`allEventsNavbarButton ${active === btn.label ? "activeButton" : ""}`}
                onClick={() => handleClick(btn.label, btn.target)}
              >
                <span>{btn.label}</span>
              </button>
            ))}
          </div>
          <div className="allEventsHeadingAndInput">
            <h2>Сите Настани</h2>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Пребарај"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEventsSearch;
