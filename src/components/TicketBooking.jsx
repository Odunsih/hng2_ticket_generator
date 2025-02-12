import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TicketBooking = () => {
  const [isBooked, setIsBooked] = useState(false);
  const ticketRef = useRef();


  const downloadPDF = () => {
    const input = ticketRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 100);
      pdf.save("ticket.pdf");
    });
  };

  const handleBookTicket = () => {
    setIsBooked(true);
  };

  // Function to reset the process
  const handleBookAnother = () => {
    setIsBooked(false);
  };

  return (
    <div className="p-6 text-center">
      {!isBooked ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Book Your Ticket</h2>
          <button
            onClick={handleBookTicket}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Confirm Booking
          </button>
        </div>
      ) : (
        <div>
          <div ref={ticketRef} className="border p-4 mb-4">
            <h3 className="text-xl font-bold">Your Ticket</h3>
            <p>Ticket ID: #123456</p>
            <p>Event: React Conference 2025</p>
            <p>Date: March 15, 2025</p>
            <p>Venue: Online</p>
          </div>
          <button
            onClick={downloadPDF}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Download Ticket
          </button>
          <button
            onClick={handleBookAnother}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Book Another Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketBooking;
