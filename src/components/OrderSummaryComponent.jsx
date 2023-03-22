import React from "react";

export const OrderSummaryComponent = () => {
    return (
        <section className="flex h-screen items-center justify-center bg-pale-blue ">
            <article className="w-[80%] bg-white rounded-3xl ">
                <div className="mb-4">
                    <img
                        src="./images/illustration-hero.svg"
                        alt="person who is dancing"
                        className="rounded-t-3xl"
                    />
                </div>
                <div className="p-8">
                    <div className="mb-8 text-center">
                        <h3 className="font-black text-2xl mb-4">Order Summary</h3>
                        <p className="text-desaturated-blue">
                            You can now listen to millions of songs, audiobooks, and
                            podcasts on any device anywhere you like!
                        </p>
                    </div>
                    <div className="mb-8 flex  bg-very-pale-blue p-2 rounded-xl py-6">
                        <img src="./images/icon-music.svg" alt="music icon" className="ml-3" />
                        <div className="ml-4">
                            <p className="font-black">Annual Plan</p>
                            <p className="text-desaturated-blue">$59.99/year</p>
                        </div>
                        <a href="#" className="flex items-center ml-16 underline text-bright-blue font-black hover:text-dark-blue hover:no-underline ">Changue</a>
                    </div>
                    <div className="flex flex-col">
                        <button className="mb-4 bg-bright-blue text-white hover:bg-dark-blue p-4 rounded-xl shadow-xl shadow-desaturated-blue font-bold">Proceed to Payment</button>
                        <button className="p-4 font-bold text-desaturated-blue hover:text-black hover:font-black">Cancel Order</button>
                    </div>

                </div>
            </article>
        </section>
    );
};
