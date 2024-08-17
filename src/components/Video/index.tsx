import style from "@/assets/styles/h5/video.module.scss";
import { useMemo } from "react";
interface Props {
  poster: string;
  src: string;
}
const AppVideo = (props: Props) => {
  const { poster } = props;
  return useMemo(() => {
    return (
      <div className={style.video}>
        <video
          style={{
            width: "100%",
            height: "100%",
          }}
          poster={poster}
        >
          <source
            src="https://storage.googleapis.com/muxdemofiles/mux.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <Player
          poster={poster}
          src={`https://storage.googleapis.com/muxdemofiles/mux.mp4`}
        /> */}
      </div>
    );
  }, []);
};

export default AppVideo;
