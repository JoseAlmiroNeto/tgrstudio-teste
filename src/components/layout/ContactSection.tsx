import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";

interface ContactSection {
  id: string;
}

export function ContactSection() {
  return (
    <section className="w-full h-full pb-8 bg-[url('../assets/mountain.webp')] bg-cover bg-no-repeat">
      <div className="flex items-center py-8">
        <h2 className="text-base sm:text-2xl text-white text-center flex-1 font-semibold">
          Send me a message
        </h2>
        <Separator className="h-1 w-3/6 sm:w-3/5 bg-orange-400" />
      </div>

      <form
        action=""
        data-aos="fade-up"
        className="w-full h-full flex flex-col items-center justify-center gap-2"
      >
        <Input
          placeholder="E-mail"
          className="w-2/3 sm:w-96 h-10 bg-white text-zinc-300 border-none"
        />
        <Textarea
          placeholder="Your message"
          className="w-2/3 sm:w-96 h-36 bg-white text-zinc-300 border-none resize-none"
        />
        <Button className="w-2/3 sm:w-96 h-10 my-2 text-sm text-white bg-orange-400 hover:bg-orange-500">
          Send message
        </Button>
      </form>
    </section>
  );
}
