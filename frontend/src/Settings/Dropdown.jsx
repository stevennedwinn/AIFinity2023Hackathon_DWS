import { useEffect, useRef, useState } from "react";

function Dropdown({ selected, setSelected, options, label}) {
  const ref = useRef();
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="dropdown">
      <label>{label}</label>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
