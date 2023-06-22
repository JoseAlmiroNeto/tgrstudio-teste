import { LineOrange } from "../elements/lineOrange";
import { VideoPlayer } from "../elements/videoPlayer";

interface VideoSection {
  id: string;
}

export function VideoSection({id}: VideoSection) {
  return (
    <div className="h-[50rem] w-full flex flex-col justify-around  fullHD:h-[64rem]" id={id}>
      <div className="flex items-center justify-between">
        <h1 className="w-[80rem] text-center text-2xl font-bold fullHD:text-4xl">
          Video presentation
        </h1>
        <LineOrange size="100%" />
      </div>
      <VideoPlayer />
    </div>
  );
}
