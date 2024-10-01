"use client";
import { GoArrowUp } from "react-icons/go";

export const BacktoTopButton = () => {
    return (
        <div
            className="h-16   fixed z-50 bottom-24 md:bottom-12  right-0"
            onClick={() => {
                window.scrollTo({
                    top: 0, 
                    behavior: "smooth",
                });
            }}
        >
            <button className="h-16 w-16  back-top rounded-full flex justify-center items-center mr-5">
                <GoArrowUp size={45} />
            </button>
        </div>
    );
};
