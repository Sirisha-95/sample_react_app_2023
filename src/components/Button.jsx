import React from "react";

function MyButton({ value, onBtnClick }) {
    return (
        <button className="square" onClick={onBtnClick} >{value}</button>
    )
}

export default MyButton;