import style from "@/assets/styles/h5/video.module.scss";
import { useEffect, useMemo, useState, useRef } from "react";
import Player, { Events } from "xgplayer";
interface Props {
  poster: string;
  src: string;
}
const AppVideo = (props: Props) => {
  const { poster } = props;
  const [player, setPlayer] = useState<any>();

  const elementRef = useRef(null);

  const playVideo = () => {
    if (player) {
      player.muted = true;
      player.play();
    }
  };

  useEffect(() => {
    const dom = elementRef.current;
    if (dom) {
      console.log(`渲染的元素`, poster, dom);
      const p = new Player({
        el: dom,
        url: "https://storage.googleapis.com/muxdemofiles/mux.mp4",
        height: `100%`,
        width: `100%`,
        poster: poster,
        autoplay: false,
      });
      p.on(Events.PlAY, () => {
        console.log(`3333`);
      });
      setPlayer(p);
    }
  }, [elementRef, poster]);

  useEffect(() => {
    const playHandler = () => {
      console.log(`监听到视频播放`);
    };

    if (player) {
      console.log(`11111`);
      player.on(Events.PlAY, () => {
        console.log(`22222`);
      });
      return () => {
        // player.off(Events.PlAY, playHandler);
      };
    }
  }, [player]);

  return (
    <div
      onClick={() => {
        playVideo();
      }}
      className={style.video}
    >
      <div ref={elementRef}></div>
      {/* <video
        //   style={{
        //     width: "100%",
        //     height: "100%",
        //   }}
        //   poster={poster}
        >
          <source
            src="https://storage.googleapis.com/muxdemofiles/mux.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
      {/* <Player
          poster={poster}
          src={`https://storage.googleapis.com/muxdemofiles/mux.mp4`}
        /> */}
    </div>
  );
};

export default AppVideo;
