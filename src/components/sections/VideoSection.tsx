import { LineOrange } from "../extras/lineOrange";
import { VideoPlayer } from "../extras/videoPlayer";

interface VideoSection {
  id: string;
}

export function VideoSection({id}: VideoSection) {
  return (
    <div className="h-[50rem] w-full flex flex-col justify-around py-6" id={id}>
      <div className="flex items-center justify-between">
        <h1 className="w-[80rem] text-center text-2xl font-bold">
          Video presentation
        </h1>
        <LineOrange size="100%" />
      </div>
      <VideoPlayer />
    </div>
  );
}
