import { ButtonLarge } from "../buttons/buttonLarge";
import { LineOrange } from "../extras/lineOrange";

export function ContactSection() {
  return (
    <section className="h-[30rem] w-full py-12 bg-[url('../assets/mountain.webp')] bg-cover bg-no-repeat">
      <div className="flex items-center">
        <h1 className="w-[58rem] text-2xl text-white font-bold text-center">Send me a message</h1>
        <LineOrange size="100%"/>
      </div>
      <div className="w-full h-full flex items-center justify-center text-sm">
        <form action="" className="flex flex-col items-center justify-center space-y-3">
          <input type="text" placeholder="E-mail" className="w-[28rem] h-16 p-6" />
          <textarea  placeholder="Your message" className="w-[28rem] h-40 p-6 resize-none" />
          <ButtonLarge text="Send message" />
        </form>
      </div>
    </section>
  )
}