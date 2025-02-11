import Header from "./layout/header"
import Button from "./components/button.jsx";

const App = () => {
  return (
   <>
   <Header />
   <main className="w-[700px] border-[#0E464F] border-2 p-[48px] rounded-[40px] bg-[#041E23] mt-15 m-auto ">

      <div className="w-[604px] h-[48px] mb-[12px] " >
        <div className="flex justify-between ">
        <h1 className="btnFont text-[32px]  ">Ticket Selection</h1>
        <p className="text-[16px]/[150%] roboto mt-5 font-light ">Step 1/3</p>
        </div>
      <hr className="h-[4px] text-[#0E464F] " />
      </div>

    <div className="w-[604px] h-[726px] p-[24px] rounded-[32px] bg-[#08252B] border-[#0E464F] border-[1px] ">
      <div className="w-[556px] h-[200px] p-[24px] rounded-[24px] border-[#07373F] border-[1px] text-center mb-[25px] ">
        <div className="w-[508px] h-[118px] mb-[25px]">
        <h1 className="road text-[62px] ">Techember Fest &quot;25</h1>
        <p className="roboto text-[16px]/[150%] ">Join us for an unforgettable experience at <br /> [Event Name]! Secure your spot now.</p>
        </div>
        <p className="roboto text-[16px]/[150%]">📍 [Event Location] <span className="mr-[16px] ml-[16px]">||</span> March 15, 2025 | 7:00 PM</p>
      </div>
      <hr className="h-[4px] text-[#07373F]" />

      <div className="w-[556px] h-[218px] ">
      <h3 className="roboto text-[16px]/[150%] font-light">Select Ticket Type:</h3>
      <div className="w-[556px] h-[186px] p-[16px] mt-[16px] mb-[16px] rounded-[24px] bg-[#052228] border-[#07373F] border-[1px] grid grid-cols-2">
        <div className="flex justify-between w-[242px] h-[65px] p-[8px] rounded-[12px] bg-[#197686] cursor-pointer">
          <div className="w-[138px] h-[49px]">
            <h3 className="roboto text-[16px]/[150%] mb-[4px]">REGULAR ACCESS</h3>
            <p className="roboto text-[14px]/[150%]">20 left!</p>
          </div>
          <div className="w-[80px] h-[38px] rounded-[8px] bg-[#0E464F] border-[#2BA4B9] border-[1px] text-right pr-[5px]">
            <h3 className="roboto font-semibold text-[20px]/[110%] mt-[10px]">Free</h3>
          </div>
        </div>

        <div className="flex justify-between w-[242px] h-[65px] p-[8px] rounded-[12px] border-[#07373F] border-[1px] cursor-pointer">
          <div className="w-[138px] h-[49px]">
            <h3 className="roboto text-[16px]/[150%] mb-[4px]">VIP ACCESS</h3>
            <p className="roboto text-[14px]/[150%]">20 left!</p>
          </div>
          <div className="w-[80px] h-[38px] rounded-[8px] bg-[#0E464F] border-[#2BA4B9] border-[1px] text-right pr-[5px]">
            <h3 className="roboto font-semibold text-[20px]/[110%] mt-[10px]">$50</h3>
          </div>
        </div>

        <div className="flex justify-between w-[242px] h-[65px] p-[8px] rounded-[12px] cursor-pointer border-[#07373F] border-[1px]">
          <div className="w-[138px] h-[49px]">
            <h3 className="roboto text-[16px]/[150%] mb-[4px]">VVIP ACCESS</h3>
            <p className="roboto text-[14px]/[150%]">20 left!</p>
          </div>
          <div className="w-[80px] h-[38px] rounded-[8px] bg-[#0E464F] border-[#2BA4B9] border-[1px] text-right pr-[5px]">
            <h3 className="roboto font-semibold text-[20px]/[110%] mt-[10px]">$150</h3>
          </div>
        </div>
      </div>
      </div>
     
     <div className="w-[556px] h-[80px] mt-[25px] mb-[25px]">
     <h3 className="roboto text-[16px]/[150%] mb-[8px]">Number of Tickets</h3>
      <select className="w-[556px] h-[48px] p-[12px] rounded-[12px] border-[#07373F] border-[1px]">
        <option className="bg-[#24A0B5]" value="one">1</option>
        <option className="bg-[#24A0B5]" value="two">2</option>
        <option className="bg-[#24A0B5]" value="three">3</option>
      </select>
     </div>
     
      <div className="flex justify-evenly w-[556px] p-[5px] rounded-[24px] bg-[#041E23] border-[#0E464F] border-[1px]">
        <Button variant="outline" btnName={"Cancel"} />
        <Button variant="select" btnName={"Next"} />
      </div>
    </div>
   </main>
   </>
  )
}

export default App
