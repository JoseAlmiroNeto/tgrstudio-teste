interface Line {
  size: string;
}

export function LineOrange({size}: Line) {
  return (
    <div className="bg-orange-500 h-[0.25rem]"  style={{ width: `${size}` }} />
  )
}