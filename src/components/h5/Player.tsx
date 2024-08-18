import usePlayer from "@/hook/usePlayer";
import AppVideo from "@/components/Video/index";
import style from "@/assets/styles/h5/player.module.scss";
import { useState } from "react";

const Player = () => {
  const { play, pause, next, prev } = usePlayer();
  const [isMute, setIsMute] = useState(true);
  const [videoData, setVideoData] = useState<VideoData>({
    name: `红毯先生🔥娱乐圈内幕`,
    intro: `宁浩刘德华揭露娱圈百态`,
    img: `https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_b9f70b-0_1685990982_1723862269065994_pic_540x304/384?max_age=7776000`,
    id: 123,
  });

  const changeMute = () => {
    setIsMute(!isMute);
  };

  return (
    <div className={style.wrap}>
      <div onClick={() => changeMute()} className={style.audio}>
        {/* {!isMute && <img src="/imgs/svg/mute.svg" alt="" />} */}
        {isMute && <img src="/imgs/svg/unmute.svg" alt="" />}
      </div>
      <AppVideo
        isMute={isMute}
        className={style.video}
        poster={videoData.img}
      ></AppVideo>
    </div>
  );
};
export default Player;
