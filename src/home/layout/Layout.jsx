
import React, { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
// import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
    const [hiddenClass, setHiddenClass] = useState("hidden");

    const handleHidden = () => setHiddenClass("");

    const handleRemove = () => {
        if (hiddenClass === "") {
            setHiddenClass("hidden");
        }
    };

    return (
        <>
            <div className="pt-8 main font-body text-body text-slate-800 bg-slate-50">
                <Header handleHidden={handleHidden} />
                {/* <MobileMenu
                    hiddenClass={hiddenClass}
                    handleRemove={handleRemove}
                /> */}
                {children}
                <Footer />
                <BackToTop />
            </div>
        </>
    );
};

export default Layout;
