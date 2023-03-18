import React from "react";
import { useState, useEffect } from "react";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })
    return (
        <>
            <header className={scroll ? "bg-transparent sticky-bar mt-4 h-20 stick": "bg-transparent sticky-bar mt-4 h-20"}>
                <div className="container bg-transparent">
					<div className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading text-orange-700">
						twool
					</div>

                </div>
            </header>
        </>
    );
};

export default Header;
