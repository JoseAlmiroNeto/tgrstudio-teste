interface IInputEmail {
  placeHolder: string,
}

export function InputEmail({placeHolder}: IInputEmail) {
  return (
    <input type="text" placeholder={placeHolder} className="w-[28rem] h-16 p-6 fullHD:w-[40rem] fullHD:h-26 fullHD:text-xl" />
  )
}