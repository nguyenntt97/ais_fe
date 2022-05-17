import React from "react"
import NavBarCore from "./NavBarCore";

export default function StickyNavBar() {
    return (
        <nav className="w-full top-0 fixed bg-red-800 border-gray-200 px-4 md:px-2 py-2.5 dark:bg-gray-800" >
            <NavBarCore />
        </nav >
    )
}