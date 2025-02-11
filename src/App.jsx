import Button from "./components/button.jsx";
import Ticket from "./assets/thumb.png"
import Ticz from "./assets/ticz.png"

const App = () => {
  return (
   <>
    <header className=" bg-[#041E23] flex justify-between max-w-[1200px] h-[76px] w-full mx-auto px-5 text-[16px] border-[#197686] border-2 rounded-[24px] p-3.5  ">
      <div className="flex mt-2.5">
        <img className="w-[40px] h-[36px]" src={Ticket} alt="ticket" />
        <img className="w-[44px] h-[23px] mt-1.5 ml-1.5" src={Ticz} alt="ticket" />
      </div>
      <div className="h-[34px] w-[341px] text-[#B3B3B3] ">
        <ul className="btnFont flex justify-between mt-[10px] mb-[10px]">
          <li className=" hover:text-[#FFF] cursor-pointer">Events</li>
          <li className=" hover:text-[#FFF] cursor-pointer">My Tickets</li>
          <li className=" hover:text-[#FFF] cursor-pointer">About Project</li>
        </ul>
      </div>
      <div>
        <Button btnName = "MY TICKETS ➜" />
      </div>
    </header>
   </>
  )
}

export default App
