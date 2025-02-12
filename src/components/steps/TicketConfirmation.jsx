import Button from "../../components/button.jsx";
import User from "../../assets/user.png"; 
import BarCode from "../../assets/barCode.png"; 
import PropTypes from 'prop-types';

const TicketConfirmation = ({
  formData,
  handleBookAnother
}) => {
  return (
    <section>
      <main className="w-[90%] lg:w-[700px] border-[#0E464F] border-2 p-[24px] lg:p-[48px] rounded-[40px] bg-[#08252B] lg:bg-[#041E23] mt-15 m-auto">
      <div className="w-[100%] lg:w-[604px] h-[78px] lg:h-[48px] mb-[25px] ">
                <div className="flex justify-between flex-row ">
                  <h1 className="btnFont text-[32px]  ">Ready</h1>
                  <p className="text-[16px]/[150%] roboto mt-5 font-light ">Step 3/3</p>
                </div>
                <div className="h-[4px] bg-[#0E464F] rounded-full">
                  <div className="h-full bg-[#24A0B5] rounded-full" style={{ width: `${(100)}%` }}></div>
                </div>
              </div>
              <div className="w-[100%] lg:w-[604px] h-[920px] lg:h-[849px]">
                {/* GENERATE TICKET */}
                <div className="w-[100%] lg:w-[604px] h-[81px]">
                  <h1 className="text-[32px]/[auto] text-center alatsi mb-[16px] ">Your Ticket is Booked!</h1>
                  <p className="roboto text-center text-[16px]/[150%]  ">Check your email for a copy or you can <strong>download</strong></p>
                </div>
                <div className="w-[100%] h-[664px] mt-[50px] sm:mt-0 pt-[32px] pb-[32px] pl-[21px] pr-[21px]">
                  <div className=" back w-[300px] h-[600px] bg-[#12464E] border-[#24A0B5] border-[1px] m-auto ">
                    {/* EVENT DETAILS */}
                    <div className="w-[260px] h-[446px] p-[14px] mt-[20px] relative left-[20px] rounded-[16px] border-[#24A0B5] border-[1px] ">
                      <div className="w-[232px] h-[416px]">
                        <div className="w-[100%] lg:w-[175px] h-[76px] m-auto text-center">
                          <h1 className="road text-[34px]/[100%]">Techember Fest &quot;25</h1>
                          <p className="roboto text-[10px]/[150%]">📍 04 Rumens road, Ikoyi, Lagos </p>
                          <p className="roboto text-[10px]/[150%]">📅 March 15, 2025 | 7:00 PM</p>
                        </div>
                        <div className="rounded-[12px] w-[140px] h-[140px] m-auto border-[#249fb580] border-[5px] ">
                          <img className="w-[100%] h-[100%]" src={formData.profilePhoto || User} alt="user image" />
                        </div>
                        <div className="w-[232px] h-[160px] p-[4px] bg-[#08343C] border-[#133D44] border-[1px] rounded-[24px] mt-[20px] ">
                          <div className="w-[224px] h-[45px] flex pbd ">
                            <div className="w-[108px] h-[45px] p-[4px] bdn ">
                              <p className="roboto text-[10px]/[150%] opacity-[0.33]">Name</p>
                              <h2 className="roboto text-[12px]/[150%] font-bold">{formData.name}</h2>
                            </div>
                            <div className="w-[108px] h-[45px] p-[4px] text-wrap ">
                              <p className="roboto text-[10px]/[150%] opacity-[0.33]">Email</p>
                              <h2 className="roboto text-[7px]/[150%] font-bold">{formData.email}</h2>
                            </div>
                          </div>
                          <div className="w-[224px] h-[45px] flex pbd ">
                            <div className="w-[108px] h-[45px] p-[4px] bdn ">
                              <p className="roboto text-[10px]/[150%] opacity-[0.33]">Ticket Type</p>
                              <h2 className="roboto text-[10px]/[150%] ">{formData.ticketType}</h2>
                            </div>
                            <div className="w-[108px] h-[45px] p-[4px]  ">
                              <p className="roboto text-[10px]/[150%] opacity-[0.33]">Ticket for:</p>
                              <h2 className="roboto text-[10px]/[150%] ">{formData.numberOfTickets}</h2>
                            </div>
                          </div>
                          <div className="w-[224px] h-[65px] flex flex-col text-wrap p-[8px]  ">
                            <p className="roboto text-[10px]/[150%] opacity-[0.33]">Special request:</p>
                            <h2 className="roboto text-[10px]/[150%] ">{formData.specialRequest}</h2>
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
                  <Button 
                    variant="select" 
                    btnName={"Book Another Ticket"} 
                    onClick={handleBookAnother}
                  />
                  <Button 
                    variant="select" 
                    btnName={"Download Ticket"} 
                  />
                </div>
              </div>
      </main>
    </section>
  );
};

TicketConfirmation.propTypes = {
  formData: PropTypes.shape({
    ticketType: PropTypes.string.isRequired,
    numberOfTickets: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    specialRequest: PropTypes.string,
    profilePhoto: PropTypes.string
  }).isRequired,
  handleBookAnother: PropTypes.func.isRequired
};

TicketConfirmation.defaultProps = {
  formData: {
    specialRequest: '',
    profilePhoto: ''
  }
};

export default TicketConfirmation;
