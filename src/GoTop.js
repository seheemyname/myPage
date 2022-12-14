import React from "react";
import { useEffect, useState } from "react";
import './App.css';

const GoTop = () => {
    const [showButton, setShowButton] = useState(false);
    const scrollToTop = () => {
        window.scroll({
            top:0,
            behavior:"smooth"
        })

    }
    useEffect(()=> {
        const showButtonClick = () => {
            if ( window.scrollY > 100 ) {
                setShowButton(true)
            }
            else {
                setShowButton(false)
            }
        }
        window.addEventListener("scroll", showButtonClick)
        return () => {
            window.removeEventListener("scroll", showButtonClick)
        }
    }, [])
    return (
        <>
        {showButton &&
            <div>
                <button className="Gotop" onClick={scrollToTop} type="button"> Top </button>
            </div>
        }
        </>
    )
}

export default GoTop;