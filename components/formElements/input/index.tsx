export default function Input({
  icon: Icon,
  placeholder,
  ...rest
}: {
  icon?: any;
  placeholder?: string;
}) {
  return (
    <div className="mb-3 relative">
      <input
        placeholder="Enter Full Name"
        {...rest}
        className={`border-2 border-[#E4E0E5] w-full p-5 font-semibold text-[#4A3353] rounded-lg ${
          Icon ? "pl-11" : ""
        }`}
      />
      {Icon && (
        <div className=" absolute top-0 h-full flex items-center p-2 pl-5">
          <Icon />
        </div>
      )}
    </div>
  );
}
