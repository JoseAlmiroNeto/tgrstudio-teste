interface ButtonFilled {
  text: string;
  link?: string;
}

export function ButtonFilled({text, link }: ButtonFilled) {
  return (
    <button className="w-40 h-10 text-sm bg-orange-500 text-white font-bold transition-colors hover:bg-orange-400 hover:text-gray-100">
      <a href={link} target="_blank">
      {text}
      </a>
    </button>
  );
}
