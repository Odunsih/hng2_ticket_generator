
const button = ({ btnName, onClick, variant = "primary", size = "md" }) => {
    const baseStyles =
    "btnFont  w-[169px] text-[16px] rounded-[9px] h-[52px] cursor-pointer";
  
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    ticket: "bg-white text-[#0A0C11]",
    select: "bg-[#24A0B5] text-[#fff]",
    outline: "text-[#24A0B5] border-[#24A0B5] border-1 transition hover:bg-[#24A0B5] hover:text-[#fff]",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <div>
        {/* <button className="border-[#24A0B5] ">

        </button> */}
        <button
            onClick={onClick}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
        >
            {btnName}
        </button>
    </div>
  
  )
}

export default button;
