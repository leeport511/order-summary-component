import React from "react";

export const OrderSummaryComponent = () => {
    return (
        <section className="flex h-screen items-center justify-center bg-pale-blue ">
            <article className="w-[80%] rounded-3xl bg-white ">
                <div className="mb-4">
                    <img
                        src="./images/illustration-hero.svg"
                        alt="person who is dancing"
                        className="rounded-t-3xl"
                    />
                </div>
                <div className="p-8">
                    <div className="mb-8 text-center">
                        <h3 className="mb-4 text-2xl font-black">
                            Order Summary
                        </h3>
                        <p className="text-desaturated-blue">
                            You can now listen to millions of songs, audiobooks,
                            and podcasts on any device anywhere you like!
                        </p>
                    </div>
                    <div className="mb-8 flex justify-between rounded-xl bg-very-pale-blue p-2 py-6">
                        <div className="flex ml-4">
                            <img
                                src="./images/icon-music.svg"
                                alt="music icon"
                                className="mr-3"
                            />
                            <div>
                                <p className="font-black">Annual Plan</p>
                                <p className="text-desaturated-blue">
                                    $59.99/year
                                </p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="flex items-center font-black mr-4 text-bright-blue underline hover:text-dark-blue hover:no-underline "
                        >
                            Changue
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <button className="mb-4 rounded-xl bg-bright-blue p-4 font-bold text-white shadow-xl shadow-desaturated-blue hover:bg-dark-blue">
                            Proceed to Payment
                        </button>
                        <button className="p-4 font-bold text-desaturated-blue hover:font-black hover:text-black">
                            Cancel Order
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );
};
