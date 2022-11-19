import { InputType } from "types";

export default function Input({
  icon: Icon,
  placeholder,
  value,

  ...rest
}: InputType) {
  return (
    <div className="mb-3 relative">
      <input
        placeholder={placeholder}
        value={value}
        {...rest}
        className={`border-2 border-[#E4E0E5] w-full p-5 font-semibold text-[#4A3353] rounded-lg text-sm md:text-base ${
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
