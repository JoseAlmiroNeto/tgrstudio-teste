interface ButtonLarge {
  text: string;
}

export function ButtonLarge({text}: ButtonLarge) {
  return (
    <button className="w-[28rem] h-16 font-bold text-base bg-orange-500 text-white">{text}</button>
  )
}