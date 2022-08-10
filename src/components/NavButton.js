import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavButton(props) {
  let navigate = useNavigate();

  let name = props.name;
  let icon = props.icon;
  let href = props.href;
  return (
    <div className="flex space-x-2 justify-center content-center">
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={() => navigate(href)}
        className="block px-0.5 py-1.5 bg-transparent text-white font-sans font-semibold text-xs leading-tight md:hover:text-gray-300"
      >
        {icon}
        &nbsp;{name}
      </button>
    </div>
  );
}
