// This state contains all the functions to control all Modals
import ModalContext from "./ModalContext";
import React, { useState } from "react";

const ModalState = (props) => {
    const purchase = () => {
        document.getElementById("my_modal_1").showModal();
    };

    return (
        <ModalContext.Provider value={{ purchase }}>
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalState;
