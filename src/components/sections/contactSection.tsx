import { ButtonLarge } from "../elements/buttons/buttonLarge";
import { InputEmail } from "../elements/inputs/inputEmail";
import { LineOrange } from "../elements/lineOrange";
import { TextMessage } from './../elements/inputs/TextMessage';

interface ContactSection {
  id: string
}

export function ContactSection({id}: ContactSection) {
  return (
    <section className="h-[30rem] w-full py-12 bg-[url('../assets/mountain.webp')] bg-cover bg-no-repeat fullHD:h-[44rem]" id={id}>
      <div className="flex items-center">
        <h1 className="w-[58rem] text-2xl text-white font-bold text-center">Send me a message</h1>
        <LineOrange size="100%"/>
      </div>
      <div className="w-full h-full flex items-center justify-center text-sm">
        <form action="" className="flex flex-col items-center justify-center space-y-3">
          <InputEmail placeHolder="Email" />
          <TextMessage />
          <ButtonLarge text="Send message" />
        </form>
      </div>
    </section>
  )
}