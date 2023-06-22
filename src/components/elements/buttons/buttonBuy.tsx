interface ButtonBuy {
  text: string;
}

export function ButtonBuy({ text }: ButtonBuy) {
  return (
    <button className="w-48 h-12 border-2 border-orange-500 text-orange-500 font-bold
    fullHD:text-2xl fullHD:w-80 fullHD:h-20 fullHD:border-[5px]">
      {text}
    </button>
  );
}
