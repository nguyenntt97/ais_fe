import React, { useEffect, useState } from "react";
import NavBarCore from "./NavBarCore";
import StickyNavBar from "./StickyNavBar"

export default function CompoundNavBar() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="absolute w-full z-20 mt-3">
      {scrollTop < 200 ? <NavBarCore /> : <StickyNavBar />}
    </div>
  );
}
