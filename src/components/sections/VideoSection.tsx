import { LineOrange } from "../extras/lineOrange";
import { VideoPlayer } from "../extras/videoPlayer";

export function VideoSection() {
  return (
    <div className="h-[50rem] w-full flex flex-col justify-around py-6">
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
