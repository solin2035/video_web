import style from "@/assets/styles/h5/videos.module.scss";
import React, { useEffect, useState, useMemo } from "react";
import { Avatar, Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { DotChartOutlined } from "@ant-design/icons";
import EndLoad from "@/components/h5/EndLoad";
import AppVideo from "@/components/Video/index";
import AspectRatioBox from "@/components/AspectRatioBox/index";

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

  const [loading, setLoading] = useState(false);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const newList = [...list];
      setList([...list, ...newList]);
    }, 500);
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const loaderSkeleton = useMemo(() => {
    return (
      <div className={style.skeleton}>
        <Skeleton.Node active={true}>LOGO</Skeleton.Node>
        <Skeleton.Node active={true}>LOGO</Skeleton.Node>
      </div>
    );
  }, []);

  return (
    <div className={style.videoWrap}>
      <h3 className={style.title}>重磅热播</h3>
      <InfiniteScroll
        dataLength={list.length}
        next={loadMoreData}
        hasMore={list.length < 50}
        loader={loaderSkeleton}
        endMessage={<EndLoad></EndLoad>}
        scrollableTarget="scrollableDiv"
      >
        <ul className={style.list}>
          {list.map((item, index) => {
            return (
              <li key={index} className={style.item}>
                <AspectRatioBox ratio={170 / 95}>
                  <AppVideo poster={item.img}></AppVideo>
                </AspectRatioBox>
                {/* <img src={item.img} alt="" /> */}
                <p>{item.name}</p>
                <p>{item.intro}</p>
              </li>
            );
          })}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default Videos;
