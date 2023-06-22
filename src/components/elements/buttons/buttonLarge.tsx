interface ButtonLarge {
  text: string;
}

export function ButtonLarge({text}: ButtonLarge) {
  return (
    <button className="w-[28rem] h-16 font-bold text-base bg-orange-500 text-white transition-colors hover:bg-orange-400 fullHD:w-[40rem] fullHD:h-26 fullHD:text-2xl">{text}</button>
  )
}