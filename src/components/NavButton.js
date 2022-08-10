import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavButton(props) {
  let navigate = useNavigate();

  let name = props.name;
  let icon = props.icon;
  let href = props.href;
  let disabled = props.disabled;
  return (
    <div className="flex space-x-2 justify-center content-center">
      <button
        type="button"
        disabled={disabled}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={() => navigate(href)}
        className={`block px-0.5 py-1.5 bg-transparent ${
          disabled ? "text-gray-400" : "text-white md:hover:text-gray-300"
        } font-sans font-semibold text-xs leading-tight`}
      >
        {icon}
        &nbsp;{name}
      </button>
    </div>
  );
}
