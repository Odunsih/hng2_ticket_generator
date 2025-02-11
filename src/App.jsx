import Header from "./layout/header"
import Button from "./components/button.jsx";

const App = () => {
  return (
   <>
   <Header />
   <main className="w-[700px] border-[#0E464F] border-2 p-[48px] rounded-[40px] bg-[#041E23] ">
      <div className="w-[604px] h-[48px]   " >
        <div className="flex justify-between mb-[12px] ">
        <h1 className="btnFont text-[32px]  ">Ticket Selection</h1>
        <p className="text-[16px]/[150%] roboto mt-5 ">Step 1/3</p>
        </div>
      <hr className="h-[4px] text-[#0E464F] " />
      </div>
    <div className="w-[604px] h-[726px] p-[24px] rounded-[32px] bg-[#08252B] border-[#0E464F] border-[1px] ">
      <div>
        <h1>Techember Fest &quot;25</h1>
        <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
        <p>📍 [Event Location] || March 15, 2025 | 7:00 PM</p>
      </div>
      <hr />
      <h3>Select Ticket Type:</h3>
      <div>
        <div>
          <div>
            <h3>REGULAR ACCESS</h3>
            <p>20 left!</p>
          </div>
          <div>
            <h3>Free</h3>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <h3>Number of Tickets</h3>
      <select>
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
      </select>
      <div>
        <Button variant="outline" btnName={"Cancel"} />
        <Button variant="select" btnName={"Next"} />
      </div>
    </div>
   </main>
   </>
  )
}

export default App
