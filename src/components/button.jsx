
const button = ({ btnName, arr, onClick, variant = "primary", size = "md" }) => {
    const baseStyles =
    " pr-[16px] pl-[16px] lg:pr-[24px] lg:pl-[24px] text-[#0A0C11] rounded-[8px] cursor-pointer";
  
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    ticket: "btnFont bg-white w-[140.6px] h-[44px] text-[14px] lg:w-[170px] lg:h-[52px] lg:text-[16px] transition hover:bg-[#24A0B5] hover:border-[#D9D9D9] hover:text-[#D9D9D9] hover:border-[.1px]",
    select: "text-[#24A0B5] border-[#24A0B5] border-1 w-[266px] h-[48px] pr-[24px] pl-[12px] transition hover:bg-[#24A0B5] hover:text-[#fff]",
    outline: "text-[#24A0B5] border-[#24A0B5] border-1 w-[214px] h-[48px] pr-[24px] pl-[12px] transition hover:bg-[#24A0B5] hover:text-[#fff]",
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
            {btnName} <span className="inline-block transform hover:rotate-[-60deg] font-bold text-[20px]">{arr}</span>
        </button>
    </div>
  
  )
}

export default button;
