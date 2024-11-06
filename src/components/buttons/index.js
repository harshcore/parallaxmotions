export const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} inline-flex items-center justify-center
    text-white font-medium whitespace-nowrap
    bg-gradient-to-br from-purple-500 via-purple-700 to-indigo-600
    bg-clip-padding rounded-full
    border border-transparent
    shadow-[inset_0_0_0_1px_rgba(67,56,202,0.25)]
    transition duration-200 ease-in-out
    text-[0.96875rem] leading-none
    h-12 px-5 gap-4
    outline-none focus:outline-purple-500
    text-shadow-[0px_1px_3px_rgba(91,33,182,0.25)]`}
      {...props}
    >
      {children}
    </button>
  );
};
