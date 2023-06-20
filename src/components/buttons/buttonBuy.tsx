interface ButtonBuy {
  text: string;
}

export function ButtonBuy({ text }: ButtonBuy) {
  return (
    <button className="w-48 h-12 border-2 border-orange-500 text-orange-500">
      <p className="font-bold text-base">{text}</p>
    </button>
  );
}
