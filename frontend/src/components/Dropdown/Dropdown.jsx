import { useEffect, useRef, useState } from "react";

function Dropdown({selected, setSelected, options, label}) {
  const ref = useRef();
  const [isActive, setIsActive] = useState(false);
  
  // This function closes the dropdown when the mouse clicks on an area outside the dropdown
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if(isActive && ref.current && !ref.current.contains(e.target)) {
        setIsActive(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return() => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isActive])

  return (
    <div className="dropdown" ref={ref}>
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
