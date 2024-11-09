import React, { useContext } from "react";
import Success from "../assets/Group.png";
import AddToCartContext from "../Context/AddToCartContext";
import CartWishlistPageContext from "../Context/CartWishlistPageContext";

const PurchaseModal = () => {
    const { handlePurchase } = useContext(CartWishlistPageContext);
    const { cartTotalPrice } = useContext(AddToCartContext);

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center space-y-4">
                    <img src={Success} className="mx-auto" />
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <hr />
                    <p className="text-gray-600">Thanks for purchasing.</p>
                    <p className="text-gray-600">Total: ${cartTotalPrice}</p>
                    <div className="modal-action justify-center">
                        <form className="w-full" method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                onClick={handlePurchase}
                                className="btn border-green-100 rounded-full w-full"
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={handlePurchase}>close</button>
                </form>
            </dialog>
        </>
    );
};

export default PurchaseModal;
