"use client"

interface SquareProps {
    value: string;
    onSquareClick?: () => void;
  }
  
  // Using const

  // export const Square = ({value}: SquareProps) => {
  //   function handleClick() {
  //       console.log("clicked!");
  //   }
  //   return (
  //       <button className="bg-pink-200 rounded-md p-5 m-5" onClick={handleClick}>{value}</button>
  //   );
  // }

  // or

  // Using function

  export function Square ({value, onSquareClick}: SquareProps) {
    return (
        <button className="bg-white border border-solid border-gray-300 float-left text-2xl font-bold leading-9 h-9 w-9 text-center" onClick={onSquareClick}>
          {value}
        </button>
    );
  }