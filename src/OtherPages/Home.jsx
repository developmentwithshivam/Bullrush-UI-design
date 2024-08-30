import React from "react";

function Home() {
  return (
    <>
    

      <div className="w-full h-screen bg-[url('/images/Mobile.jpeg')] md:bg-[url('/Images/LaptopBackgroun.jpeg')] bg-cover bg-center lg:bg-top overflow-hidden">
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <div className=" flex justify-center mb-3 w-full h-auto text-4xl text-center md:text-5xl font-bold  text-white">
            <div className="w-auto p-3  ">BullRush Trading Trivia</div>
          </div>
          <div className="text-white w-full h-28 text-center text-sm  font-semibold md:text-lg  ">
            <p className=" text-lg">
              Take the BullRush trading trivia challenge today. This exciting
              trading
            </p>
            <p className=" text-lg">
              trivia quiz gives traders the opportunity to test their trading
              trivia
            </p>
            <p className=" text-lg">
              knowledge. Are you an FX Titan or a Trading Rookie? Test your
              trading
            </p>
            <p className=" text-lg">knowledge!</p>
          </div>
          <div className="bg-red-600 w-96 h-16 flex justify-center items-center mt-6 text-base rounded-md text-white">Test your trading knowledge with this fun trivia!</div>
        </div>
      </div>
    
    </>
  );
}

export default Home;
