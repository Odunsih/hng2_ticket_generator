import Header from "./layout/header"
import Button from "./components/button.jsx";
import { Mail } from 'lucide-react';
import { useState } from "react";
import User from "./assets/user.png"
import BarCode from "./assets/barCode.png"

const App = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleClick = (id) => {
    setSelectedDiv(id);
  };
  return (
   <>
   <Header />

   {/* STEP 1 */}
   <section>
      <main className="w-[90%] lg:w-[700px] border-[#0E464F] border-2 p-[24px] lg:p-[48px] rounded-[40px] bg-[#08252B] lg:bg-[#041E23] mt-15 m-auto ">

    <div className="w-[100%] lg:w-[604px] h-[78px] lg:h-[48px] mb-[25px] " >
      <div className="flex justify-between flex-col lg:flex-row ">
      <h1 className="btnFont text-[32px]  ">Ticket Selection</h1>
      <p className="text-[16px]/[150%] roboto mt-5 font-light ">Step 1/3</p>
      </div>
    <hr className="h-[4px] text-[#0E464F] " />
    </div>

    <div className="w-[100%] lg:w-[604px] lg:h-[682px] lg:p-[24px] rounded-[32px] bg-[#08252B] border-0 border-[#0E464F] lg:border-[1px] ">
    <div className="tech w-[100%] lg:w-[556px] h-[243px] lg:h-[200px] p-[16px] lg:p-[24px] rounded-[24px] border-[#07373F] border-[1px] text-center mb-[25px] ">
      <div className="w-[100%] lg:w-[508px] h-[119px] mb-[25px]">
      <h1 className="road text-[41px] lg:text-[62px] ">Techember Fest &quot;25</h1>
      <p className="roboto text-[14px] lg:text-[16px]/[150%] ">Join us for an unforgettable experience at <br /> [Event Name]! Secure your spot now.</p>
      </div>
      <p className="roboto pl-[10px] lg:pl-0 text-[16px]/[150%]">📍 [Event Location] <span className="mr-[16px] invisible md:visible ml-[16px]">|| </span> March 15, 2025 | 7:00 PM</p>
    </div>
    <hr className="h-[4px] text-[#07373F]" />
    {/* TICKET TYPE */}
    <div className="w-[97%] lg:w-[556px] h-[442px] lg:h-[174px] mt-[25px] ">
    <h3 className="roboto text-[16px]/[150%] font-light">Select Ticket Type:</h3>
    <div className="w-[100%] lg:w-[556px] h-[410px] lg:h-[142px] p-[16px] mt-[16px] mb-[16px] rounded-[24px] bg-[#052228] border-[#07373F] border-[1px] flex flex-col lg:flex-row justify-evenly">

      {/* FREE */}
      <div
      className={`flex flex-col justify-between w-[100%] lg:w-[158px] h-[110px] p-[12px] rounded-[12px] cursor-pointer border-[#197686] border-[1px] transition hover:bg-[#2C545B] ${
        selectedDiv === "free" ? "bg-[#12464E]" : ""
      }`}
      onClick={() => handleClick("free")}
    >
      <div className="w-[80px] h-[38px]">
        <h3 className="roboto font-semibold text-[20px]/[110%]">Free</h3>
      </div>
      <div className="w-[138px] h-[49px] mt-[12px]">
        <h3 className="roboto text-[#FAFAFA] text-[16px]/[150%] mb-[4px]">
          REGULAR ACCESS
        </h3>
        <p className="roboto text-[14px]/[150%]">20/52</p>
      </div>
    </div>

    {/* $50 */}
    <div
      className={`flex flex-col justify-between w-[100%] lg:w-[158px] h-[110px] p-[12px] rounded-[12px] cursor-pointer border-[#197686] border-[1px] transition hover:bg-[#2C545B] ${
        selectedDiv === "50" ? "bg-[#12464E]" : ""
      }`}
      onClick={() => handleClick("50")}
    >
      <div className="w-[80px] h-[38px]">
        <h3 className="roboto font-semibold text-[20px]/[110%]">$50</h3>
      </div>
      <div className="w-[138px] h-[49px] mt-[12px]">
        <h3 className="roboto text-[16px]/[150%] mb-[4px]">VIP ACCESS</h3>
        <p className="roboto text-[14px]/[150%]">20/52</p>
      </div>
    </div>

    {/* $150 */}
    <div
      className={`flex flex-col justify-between w-[100%] lg:w-[158px] h-[110px] p-[12px] rounded-[12px] cursor-pointer border-[#197686] border-[1px] transition hover:bg-[#2C545B] ${
        selectedDiv === "150" ? "bg-[#12464E]" : ""
      }`}
      onClick={() => handleClick("150")}
    >
      <div className="w-[80px] h-[38px]">
        <h3 className="roboto font-semibold text-[20px]/[110%]">$150</h3>
      </div>
      <div className="w-[138px] h-[49px] mt-[12px]">
        <h3 className="roboto text-[16px]/[150%] mb-[4px]">VVIP ACCESS</h3>
        <p className="roboto text-[14px]/[150%]">20/52</p>
      </div>
    </div>
    </div>
    </div>

    {/* NUMBER OF TICKET */}
    <div className="w-[97%] lg:w-[556px] h-[80px] mt-[25px] mb-[25px]">
    <h3 className="roboto text-[16px]/[150%] mb-[8px]">Number of Tickets</h3>
    <select className="w-[100%] lg:w-[556px] h-[48px] p-[12px] rounded-[12px] border-[#07373F] border-[1px]">
      <option className="bg-[#24A0B5]" value="one">1</option>
      <option className="bg-[#24A0B5]" value="two">2</option>
      <option className="bg-[#24A0B5]" value="three">3</option>
    </select>
    </div>

    {/* BUTTONS */}
    <div className="flex justify-between flex-col h-[112px] lg:flex-row">
      <Button variant="select" btnName={"Cancel"} />
      <Button variant="select" btnName={"Next"} />
    </div>
    </div>
    </main>
   </section>

   {/* STEP 2 */}
   <section>
      <main className="w-[90%] lg:w-[700px] border-[#0E464F] border-2 p-[24px] lg:p-[48px] rounded-[40px] bg-[#08252B] lg:bg-[#041E23] mt-15 m-auto ">

    <div className="w-[100%] lg:w-[604px] h-[78px] lg:h-[48px] mb-[25px] " >
      <div className="flex justify-between flex-row ">
      <h1 className="btnFont text-[32px]  ">Attendee Details</h1>
      <p className="text-[16px]/[150%] roboto mt-5 font-light ">Step 2/3</p>
      </div>
    <hr className="h-[4px] text-[#0E464F] " />
    </div>

    <div className="w-[100%] lg:w-[604px] lg:h-[907px] lg:p-[24px] rounded-[32px] bg-[#08252B] border-0 border-[#0E464F] lg:border-[1px] ">

      {/* UPLAOD */}
    <div className="w-[100%] lg:w-[556px]  lg:h-[243px] h-[328px] p-[16px] lg:p-[24px] rounded-[24px] border-[#07373F] border-[1px] text-center mb-[32px] ">
      <h2 className="text-left roboto text-[16px]/[150%]">Upload Profile Photo</h2>
      <div className=" w-[100%] lg:w-[508px]  lg:h-[200px] lg:bg-[#00000048] mt-[24px] ">
        <input className="w-[240px] h-[240px] p-[24px] bg-[#0E464F] border-[#24A0B5] border-[5px] rounded-[32px] roboto text-[16px]/[150%] relative bottom-[10px] lg:bottom-[20px] " type="file" />
      </div>
    </div>
    <hr className="h-[4px] text-[#07373F]" />
    {/* NAME INPUT */}
    <div className="w-[97%] lg:w-[556px] h-[80px] mt-[25px] flex flex-col ">
    <label className="roboto text-[16px]/[150%] font-normal">Enter your name *</label>
    <input className="p-[12px] w-[100%] lg:w-[556px] h-[48px] border-[#07373F] border-[1px] rounded-[12px] text-[16px] mt-[8px] transition focus:ring-2 focus:ring-[#24A0B5] focus:outline-none caret-[#24A0B5] " type="text" />
    </div>
    {/* EMAIL INPUT */}
    <div className="w-[97%] lg:w-[556px] h-[80px] mt-[32px] flex flex-col ">
    <label className="roboto text-[16px]/[150%] font-normal">Enter your email *</label>
     <div className="relative">
        <Mail className="absolute left-3 top-6.5 h-[24px] w-[24px] text-[#fff]" />
      </div>
      <input className="p-[12px] pl-[40px] w-[100%] lg:w-[556px] h-[48px] flex border-[#07373F] border-[1px] rounded-[12px] text-[16px] mt-[8px] transition focus:ring-2 focus:ring-[#24A0B5] focus:outline-none " type="email" />
      
    </div>

    {/* TEXTAREA */}
    <div className="w-[97%] lg:w-[556px] h-[159px] mt-[32px] flex flex-col">
        <label className="roboto text-[16px]/[150%] font-normal mb-[8px]" htmlFor="textarea">Special request?</label>
        <textarea className="w-[100%] lg:w-[556px] h-[127px] p-[12px] rounded-[12px] resize-none focus:bg-[#083C46] border-[#07373F] border-[1px] text-[16px]/[150%]  focus:ring-2 focus:ring-[#24A0B5] focus:outline-none " placeholder="Textarea"></textarea>
    </div>
        {/* BUTTONS */}
        <div className="flex justify-between flex-col h-[112px] lg:flex-row mt-[32px]">
      <Button variant="select" btnName={"Back"} />
      <Button variant="select" btnName={"Get My Free Ticket"} />
    </div>
    </div>
    </main>
   </section>

   {/* READY */}
   <section>
      <main className="w-[90%] lg:w-[700px] border-[#0E464F] border-2 p-[24px] lg:p-[48px] rounded-[40px] bg-[#08252B] lg:bg-[#041E23] mt-15 m-auto ">

    <div className="w-[100%] lg:w-[604px] h-[78px] lg:h-[48px] mb-[25px] " >
      <div className="flex justify-between flex-row ">
      <h1 className="btnFont text-[32px]  ">Ready</h1>
      <p className="text-[16px]/[150%] roboto mt-5 font-light ">Step 3/3</p>
      </div>
    <hr className="h-[4px] text-[#0E464F] " />
    </div>
        <div className="w-[100%] lg:w-[604px] h-[920px] lg:h-[849px]">
      {/* GENERATE TICKET */}

          <div className="w-[100%] lg:w-[604px] h-[81px]">
            <h1 className="text-[32px]/[auto] text-center alatsi mb-[16px] ">Your Ticket is Booked!</h1>
            <p className="roboto text-center text-[16px]/[150%]  " >Check your email for a copy or you can <strong>download</strong></p>
          </div>
          <div className="w-[100%] h-[664px] pt-[32px] pb-[32px] pl-[21px] pr-[21px]">
            <div className=" back w-[300px] h-[600px] bg-[#12464E] border-[#24A0B5] border-[1px] m-auto ">
              {/* EVENT DETAILS */}
              <div className="w-[260px] h-[446px] p-[14px] mt-[20px] relative left-[20px] rounded-[16px] border-[#24A0B5] border-[1px] ">
                <div className="w-[232px] h-[416px]">
                    <div className="w-[175px] h-[76px] m-auto text-center">
                      <h1 className="road text-[34px]/[100%]">Techember Fest &quot;25</h1>
                      <p className="roboto text-[10px]/[150%]">📍 04 Rumens road, Ikoyi, Lagos </p>
                      <p className="roboto text-[10px]/[150%]">📅 March 15, 2025 | 7:00 PM</p>

                    </div>
                    <div className="rounded-[12px] w-[140px] h-[140px] m-auto border-[#249fb580] border-[5px] ">
                    <img className="w-[100%] h-[100%]" src={User} alt="user image" />
                    </div>
                    <div className="w-[232px] h-[160px] p-[4px] bg-[#08343C] border-[#133D44] border-[1px] rounded-[24px] mt-[20px] ">
                      <div className="w-[224px] h-[45px] flex pbd ">
                          <div className="w-[108px] h-[45px] p-[4px] bdn ">
                              <p className="roboto text-[10px]/[150%] opacity-[0.33]">Name</p>
                              <h2 className="roboto text-[12px]/[150%] font-bold">Avi Chukwu</h2>
                          </div>
                          <div className="w-[108px] h-[45px] p-[4px]  ">
                          <p className="roboto text-[10px]/[150%] opacity-[0.33]">Email</p>
                          <h2 className="roboto text-[12px]/[150%] font-bold">User@gmail.com</h2>
                          </div>
                      </div>
                      <div className="w-[224px] h-[45px] flex pbd ">
                          <div className="w-[108px] h-[45px] p-[4px] bdn ">
                          <p className="roboto text-[10px]/[150%] opacity-[0.33]">Ticket Type</p>
                          <h2 className="roboto text-[10px]/[150%] ">VIP</h2>
                          </div>
                          <div className="w-[108px] h-[45px] p-[4px]  ">
                          <p className="roboto text-[10px]/[150%] opacity-[0.33]">Ticket for:</p>
                          <h2 className="roboto text-[10px]/[150%] ">1</h2>
                          </div>
                      </div>
                      <div className="w-[224px] h-[65px] p-[8px]  ">
                      <p className="roboto text-[10px]/[150%] opacity-[0.33]">Special request:</p>
                      <h2 className="roboto text-[10px]/[150%] ">Nil ? Or the users sad story they write in there gets this whole space, Max of three rows</h2>
                      </div>

                    </div>
                  
                </div>
              </div>
            <div className="bod w-[30px] h-[30px] bg-[#041E23] rounded-[50%] relative right-[15px] bottom-[470px] rotate-[30deg] "></div>
            <div className="bod w-[30px] h-[30px] bg-[#041E23] rounded-[50%] relative left-[280px] bottom-[501px] rotate-[140deg] "></div>
            <div className="bod w-[30px] h-[30px] bg-[#041E23] rounded-[50%] relative left-[285px] bottom-[60px] rotate-[180deg] "></div>
            <div className="bod w-[30px] h-[30px] bg-[#041E23] rounded-[50%] relative right-[15px] bottom-[90px]  "></div>
            <div className="bod w-[30px] h-[30px] bg-[#041E23] rounded-[50%] relative right-[10px] bottom-[12px] rotate-[-40deg] "></div>
            <div className="bod w-[30px] h-[30px] bg-[#041E23] rounded-[50%] relative left-[280px] bottom-[37px] rotate-[-140deg] "></div>
            <hr className="zig relative bottom-[167px]" />
            <div className="w-[236px] h-[68px] relative bottom-[150px] left-[30px] ">
                <img src={BarCode} alt="" />
            </div>
            </div>
           
          </div>
        {/* BUTTONS */}
        <div className="flex justify-between flex-col h-[112px] lg:flex-row mt-[32px]">
      <Button variant="select" btnName={"Book Another Ticket"} />
      <Button variant="select" btnName={"Download Ticket"} />
      </div>
    </div>
    </main>
   </section>
   </>
  )
}

export default App
