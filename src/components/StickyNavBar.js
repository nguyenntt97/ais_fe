import React from "react"
import NavBarCore from "./NavBarCore";

export default function StickyNavBar() {
    return (
        <nav className="w-full top-0 fixed bg-red-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800" >
            <NavBarCore />
        </nav >
    )
}