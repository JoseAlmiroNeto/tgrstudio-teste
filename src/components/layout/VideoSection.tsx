import { VideoPlayer } from "../elements/videoPlayer";
import { Separator } from "../ui/separator";

export function VideoSection() {
  return (
    <div className="w-full h-full flex flex-col justify-around">
      <div className="flex items-center py-7">
        <h2 className="text-base sm:text-2xl text-center flex-1 font-semibold">
          Video apresentation
        </h2>
        <Separator className="h-1 w-3/6 sm:w-3/5 bg-orange-400" />
      </div>
      <VideoPlayer />
    </div>
  );
}
