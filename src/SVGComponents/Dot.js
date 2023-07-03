import React from "react";

const Dot = () => {

    return <>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_382)">
                <circle cx="9" cy="9" r="9" transform="matrix(-1 0 0 1 26 0)" fill="#011627" />
                <circle cx="9" cy="9" r="8" transform="matrix(-1 0 0 1 26 0)" stroke="white" stroke-width="2" />
            </g>
            <defs>
                <filter id="filter0_d_1_382" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_382" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_382" result="shape" />
                </filter>
            </defs>
        </svg>


    </>
};

export default Dot;