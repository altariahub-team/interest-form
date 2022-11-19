export default function Input({ ...rest }) {
  return (
    <div className="mb-3">
      <input
        placeholder="Enter Full Name"
        {...rest}
        className="border-2 border-[#E4E0E5] w-full p-5 font-semibold text-[#4A3353] rounded-lg"
      />
    </div>
  );
}
