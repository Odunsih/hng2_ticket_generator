import Header from "./layout/header";
import { useEffect, useState } from "react";
import TicketSelection from './components/steps/TicketSelection';
import AttendeeDetails from './components/steps/AttendeeDetails';
import TicketConfirmation from './components/steps/TicketConfirmation';

const App = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ticketType: "",
    numberOfTickets: 1,
    name: "",
    email: "",
    specialRequest: "",
    profilePhoto: ""
  });
  const [errors, setErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = (id) => {
    setSelectedDiv(id);
    setFormData({ ...formData, ticketType: id });
  };

  // const handleKeyPress = (e, id) => {
  //   if (e.key === 'Enter' || e.key === ' ') {
  //     e.preventDefault();
  //     handleClick(id);
  //   }
  // };

  const handleNext = (e) => {
    if (e && e.key && e.key !== 'Enter') return;
    
    if (validateForm()) {
      localStorage.setItem("ticketData", JSON.stringify(formData));
      setStep(2);
    }
  };

  const handleGetTicket = (e) => {
    if (e && e.key && e.key !== 'Enter') return;

    if (validateForm()) {
      localStorage.setItem("attendeeData", JSON.stringify(formData));
      setStep(3);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when input changes
  };

  const handleFileUpload = async (e) => {
    const fileInput = e.target;
    if (fileInput.files.length) {
      const file = fileInput.files[0];
      if (file.type.startsWith('image/')) {
        setFormData({ ...formData, profilePhoto: URL.createObjectURL(file) });
        setErrors({ ...errors, profilePhoto: '' });
      } else {
        setErrors({ ...errors, profilePhoto: 'Please upload a valid image file' });
      }
    } else if (fileInput.value.startsWith('http')) {
      setFormData({ ...formData, profilePhoto: fileInput.value });
      setErrors({ ...errors, profilePhoto: '' });
    } else {
      setErrors({ ...errors, profilePhoto: 'Please provide a Cloudinary URL or any image link' });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData({ ...formData, profilePhoto: URL.createObjectURL(file) });
      setErrors({ ...errors, profilePhoto: '' });
    } else {
      setErrors({ ...errors, profilePhoto: 'Please upload a valid image file' });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // For step 1
    if (step === 1) {
      if (!formData.ticketType) {
        tempErrors.ticketType = "Please select a ticket type";
        isValid = false;
      }
      
    }

    // For step 2
    if (step === 2) {
      if (!formData.name.trim()) {
        tempErrors.name = "Name is required";
        isValid = false;
      }

      if (!formData.email.trim()) {
        tempErrors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Email is invalid";
        isValid = false;
      }

      if (!formData.profilePhoto) {
        tempErrors.profilePhoto = "Profile photo is required";
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const loadData = () => {
    const ticketData = JSON.parse(localStorage.getItem("ticketData"));
    const attendeeData = JSON.parse(localStorage.getItem("attendeeData"));
    if (ticketData && attendeeData) {
      setFormData({ ...ticketData, ...attendeeData });
    }
  };

  useEffect(() => {
    if (step === 3) {
      loadData();
    }
  }, [step]);

  const handleBookAnother = () => {
    // Reset form data to initial state
    setFormData({
      ticketType: "",
      numberOfTickets: 1,
      name: "",
      email: "",
      specialRequest: "",
      profilePhoto: ""
    });
    
    // Clear any errors
    setErrors({});
    
    // Reset selected div state
    setSelectedDiv(null);
    
    // Go back to step 1
    setStep(1);
  };

  return (
    <>
      <Header />
      
      <section aria-label={`Step ${step} of 3: ${
        step === 1 ? 'Ticket Selection' : 
        step === 2 ? 'Attendee Details' : 
        'Ticket Confirmation'
      }`}>
        {step === 1 && (
          <TicketSelection
            step={step}
            selectedDiv={selectedDiv}
            formData={formData}
            errors={errors} 
            handleClick={handleClick}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleCancel={() => setStep(1)} 
          />
        )}

        {step === 2 && (
          <AttendeeDetails
            step={step}
            formData={formData}
            errors={errors}
            isDragging={isDragging}
            handleInputChange={handleInputChange}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            handleFileUpload={handleFileUpload}
            handleGetTicket={handleGetTicket}
            setStep={setStep}
          />
        )}

        {step === 3 && (
          <TicketConfirmation
            formData={formData}
            handleBookAnother={handleBookAnother}
          />
        )}
      </section>
    </>
  );
};

export default App;
