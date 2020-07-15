import React from "react";

const Pricing = ({ title, transparentCTAs }) => {
  const btnClassName = transparentCTAs
    ? "mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
    : "mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg";
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">easyScreen</div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">browserbaseret</li>
                <li className="border-b py-4">skærmstyringssystem</li>
                <li className="border-b py-4">interaktiv formidling</li>
                <li className="border-b py-4">automatisk indhold</li>
                <li className="border-b py-4">tonsvis af addons</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full p-8 text-3xl font-bold text-center">easyOPAC</div>
              <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul className="w-full text-center text-base font-bold">
                <li className="border-b py-4">lirum</li>
                <li className="border-b py-4">lopsim</li>
                <li className="border-b py-4">lapsing</li>
                <li className="border-b py-4">vapsing</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">emailKanon</div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">nyhedsbrev med ganske få klik</li>
                <li className="border-b py-4">statistiksystem</li>
                <li className="border-b py-4">ubegrænset antal nyhedsbreve</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
