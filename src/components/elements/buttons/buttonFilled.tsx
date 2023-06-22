interface ButtonFilled {
  text: string;
  link?: string;
}

export function ButtonFilled({ text, link }: ButtonFilled) {
  return (
    <a href={link} target="_blank">
      <button className="w-40 h-10 text-sm bg-orange-500 text-white font-bold transition-colors hover:bg-orange-400 hover:text-gray-100
      fullHD:text-xl fullHD:w-56 fullHD:h-16 fullHD:border-[5px]">
        {text}
      </button>
    </a>
  );
}