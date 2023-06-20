interface ButtonTransparent {
  text: string;
}

export function ButtonTransparent({text}: ButtonTransparent) {
  return (
    <button className="w-40 h-10 text-sm border-[3px] font-bold border-orange-500 text-orange-500 transition-colors hover:text-orange-400 hover:border-orange-400">
      {text}
    </button>
  );
}
