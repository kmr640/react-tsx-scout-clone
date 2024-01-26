import React from "react"

// const Button = ({ heroButton, children }: ButtonProps) => {
//   return (
//     <button className={`bg-PalatinateBlue text-white font-bold rounded ${heroButton}`}>
//       {children}
//     </button>
//   );
// };

type ButtonProps = {
  heroButton?: string
  children?: string
}

const Button: React.FC<ButtonProps> = ({ heroButton, children }) => (
  <button
    className={`bg-PalatinateBlue text-white font-bold rounded-lg ${heroButton}`}
  >
    {children}
  </button>
)

export default Button
