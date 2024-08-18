import style from "@/assets/styles/h5/video.module.scss";
import { useEffect, useMemo, useState, useRef } from "react";
import Player, { Events } from "xgplayer";
import classNames from "classnames";
import { tree } from "../../../node_modules/next/dist/build/templates/app-page";
interface Props {
  poster: string;
  src?: string;
  isMute?: boolean;
  videoId: string | number;
  goLink?: () => void;
  className?: any;
}
const AppVideo = (props: Props) => {
  const { poster, goLink, className, isMute = true } = props;
  const [player, setPlayer] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  const elementRef = useRef(null);

  const playVideo = () => {
    if (player) {
      player.muted = isMute;
      player.play();
    }
  };
  const pauseVideo = () => {
    if (player) {
      player.pause();
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
      p.muted = isMute;
      p.on(Events.PLAY, () => {
        setIsPlaying(true);
      });
      p.on(Events.PAUSE, () => {
        setIsPlaying(false);
      });
      setPlayer(p);
    }
  }, [elementRef, poster]);

  useEffect(() => {
    if (player) {
      console.log(`调整声音`);
      player.muted = isMute;
    }
  }, [isMute, player]);

  useEffect(() => {
    const playHandler = () => {
      console.log(`监听到视频播放`);
    };

    if (player) {
      player.on(Events.PLAY, () => {
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
        if (isPlaying && goLink) {
          goLink?.();
        } else if (isPlaying) {
          pauseVideo();
        } else {
          playVideo();
        }
      }}
      className={classNames(style.video, className)}
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
