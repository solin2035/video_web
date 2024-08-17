import style from "@/styles/h5/videos.module.scss";
import { useState } from "react";

const Videos = () => {
  const [list, setList] = useState([
    {
      name: `红毯先生🔥娱乐圈内幕`,
      intro: `宁浩刘德华揭露娱圈百态`,
      img: `https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_b9f70b-0_1685990982_1723862269065994_pic_540x304/384?max_age=7776000`,
    },
    {
      name: `斗罗大陆2·更新`,
      intro: `你我皆唐门，生在绝世中`,
      img: `https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_442f1e-8_358937277_1723859285763105_pic_540x304/384?max_age=7776000`,
    },
    {
      name: `红毯先生🔥娱乐圈内幕`,
      intro: `宁浩刘德华揭露娱圈百态`,
      img: `https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_b9f70b-0_1685990982_1723862269065994_pic_540x304/384?max_age=7776000`,
    },
    {
      name: `斗罗大陆2·更新`,
      intro: `你我皆唐门，生在绝世中`,
      img: `https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_442f1e-8_358937277_1723859285763105_pic_540x304/384?max_age=7776000`,
    },
    {
      name: `红毯先生🔥娱乐圈内幕`,
      intro: `宁浩刘德华揭露娱圈百态`,
      img: `https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_b9f70b-0_1685990982_1723862269065994_pic_540x304/384?max_age=7776000`,
    },
    {
      name: `斗罗大陆2·更新`,
      intro: `你我皆唐门，生在绝世中`,
      img: `https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_442f1e-8_358937277_1723859285763105_pic_540x304/384?max_age=7776000`,
    },
  ]);
  return (
    <div className={style.videoWrap}>
      <h3 className={style.title}>重磅热播</h3>
      <ul className={style.list}>
        {list.map((item) => {
          return (
            <li className={style.item}>
              <img src={item.img} alt="" />
              <p>{item.name}</p>
              <p>{item.intro}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Videos;
