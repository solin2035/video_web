import {useState} from "react";
import {useRouter} from "next/router";
import {debounce} from "lodash"

interface searchParams {
    title: string
}

const useSearch = () => {
    const router = useRouter()
    const [searchList, setSearchList] = useState<any>([])
    const [topList, setTopList] = useState<any>([])

    const [videoTypeList, setVideoTypeList] = useState<any>([
        {tabId: 0, tabName: "热搜"},
        {tabId: 1, tabName: "电影"},
        {tabId: 2, tabName: "电视剧"},
        {tabId: 3, tabName: "综艺"},
        {tabId: 4, tabName: "动漫"},
        {tabId: 5, tabName: "纪录片"},
    ])

    /**
     * 模糊搜索列表
     * @param param
     */
    async function getSearchListApi(param: searchParams) {
        return {data: [{id: 1, tabName: "电影", list: []}, {id: 2, tabName: "电视剧", list: []}]}
    }

    /**
     * 获取搜索详情
     * @param param
     */
    async function getSearchDetailApi(param: searchParams) {
        return {data: {id: 321}}
    }

    /**
     * 获取TOP详情
     */
    async function getTopListApi() {
        return {
            data: [
                {
                    "tabName": "热搜",
                    "tabId": "0",
                    "tabDataKey": "datakey=srh_oper_hot_list&channelID=0",
                    "backgroundLightImg": "",
                    "titleLightImg": "http://puui.qpic.cn/media_img/lena/PICzxkgxs_72_600/0",
                    "backgroundDarkImg": "",
                    "titleDarkImg": "http://puui.qpic.cn/media_img/lena/PIC8jxsme_72_600/0",
                    "hotRankResult": {
                        "totalSize": 100,
                        "rankItemList": [
                            {
                                "title": "喜人奇妙夜",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200vyot3cs1718618943841/260",
                                "lines": [
                                    "2024 综艺 黄渤 秦昊 贾冰 高圆圆 张雨绮 于和伟 马东 金靖 宋木子"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超2.1万"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200vyot3cs",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超2.1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "庆余年第二季",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002002kqssyu1715223183563/260",
                                "lines": [
                                    "2024 电视剧 张若昀 李沁 陈道明 吴刚 田雨 李小冉 俞飞鸿 袁泉 毛晓彤 郭麒麟 宋轶 辛芷蕾 宁理 刘端端 张昊唯 付辛博 高曙光 赵柯 于洋 李强 刘桦 佟梦实 郭子凡 金晨 王楚然 高露 王晓晨 隋俊波 归亚蕾 余皑磊 毕彦君 罗二羊 吴幸键 宣言 王庆祥 徐志胜"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破2000万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.6万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.0"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "轻喜剧"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "头脑博弈"
                                    },
                                    {
                                        "type": 90,
                                        "content": "反转"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002002kqssyu",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破2000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.6万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.0\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"轻喜剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"头脑博弈\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"反转\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "剑来",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020072zgk611721874669799/260",
                                "lines": [
                                    "2024 动漫 陈平安 齐静春 宁姚 刘羡阳 顾璨"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.9万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.5"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 70,
                                        "content": "动作炫酷"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方仙侠"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "逆袭"
                                    },
                                    {
                                        "type": 90,
                                        "content": "武修"
                                    },
                                    {
                                        "type": 90,
                                        "content": "中国风"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc0020072zgk61",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.9万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.5\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动作炫酷\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方仙侠\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"逆袭\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"武修\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"中国风\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "斗罗大陆Ⅱ绝世唐门",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200xf3rir61722917091919/260",
                                "lines": [
                                    "2023 动漫 霍雨浩 唐舞桐 贝贝 和菜头 徐三石 江楠楠 萧萧"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "热血战斗"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "技能对拼"
                                    },
                                    {
                                        "type": 90,
                                        "content": "科技发明"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200xf3rir6",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"热血战斗\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"技能对拼\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"科技发明\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "斗破苍穹年番",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020027yzd9e1723195259313/260",
                                "lines": [
                                    "2022 动漫 萧炎 美杜莎 萧薰儿 小医仙 云韵"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破2000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破500万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "热血战斗"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "逆袭"
                                    },
                                    {
                                        "type": 90,
                                        "content": "重回巅峰"
                                    },
                                    {
                                        "type": 90,
                                        "content": "技能对拼"
                                    },
                                    {
                                        "type": 90,
                                        "content": "友情"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc0020027yzd9e",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破2000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破500万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"热血战斗\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"逆袭\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"重回巅峰\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"技能对拼\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"友情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "完美世界",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mcv8hkc8zk8lnov1722320529103/260",
                                "lines": [
                                    "2021 动漫 石昊 柳神"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破3000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破5000万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.5"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mcv8hkc8zk8lnov",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破3000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破5000万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.5\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "柳舟记",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200c9usasa1697979259711/260",
                                "lines": [
                                    "2024 电视剧 张晚意 王楚然 刘令姿 常华森 张弛 袁雨萱"
                                ],
                                "tags": [
                                    {
                                        "type": 50,
                                        "content": "讨论破100万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超2.5万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.0"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "偶像爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "失忆"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200c9usasa",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"讨论破100万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超2.5万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.0\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"偶像爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"失忆\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "情刺",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200u3ayosi1722929726269/260",
                                "lines": [
                                    "2024 电视剧 何宣林 严子贤 高铭辰 莫寒"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.8万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "相爱相杀"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200u3ayosi",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.8万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"相爱相杀\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "斗罗大陆",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/m441e3rjq9kwpsc1700874697596/260",
                                "lines": [
                                    "2018 动漫 唐三 小舞 戴沐白 奥斯卡 马红俊 宁荣荣 朱竹清"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破5000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破300万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "热血战斗"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "技能对拼"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "m441e3rjq9kwpsc",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破5000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破300万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"热血战斗\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"技能对拼\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "吞噬星空",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/324olz7ilvo2j5f1722937217565/260",
                                "lines": [
                                    "2020 动漫 罗峰 徐欣 巴巴塔"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破2000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破100万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.9万"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 80,
                                        "content": "未来科幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "324olz7ilvo2j5f",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破2000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破100万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.9万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"未来科幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            }
                        ]
                    },
                    "jumpLink": "txvideo://v.qq.com/FindMovieCenterActivity?type=channel_list_nav&selectTabId=bd&dataKey=channel_id%3D100113%26url%3D%25252F%25253Fpgid%25253DrankMain%2525253Drank300000%25252526rankSub%2525253Daf7d55a0571bbab1a8ba4211c8eceb8a"
                },
                {
                    "tabName": "电视剧",
                    "tabId": "2",
                    "tabDataKey": "datakey=srh_oper_hot_list&channelID=2",
                    "backgroundLightImg": "",
                    "titleLightImg": "http://puui.qpic.cn/media_img/lena/PIC3wftin_72_600/0",
                    "backgroundDarkImg": "",
                    "titleDarkImg": "http://puui.qpic.cn/media_img/lena/PICg4jk6h_72_600/0",
                    "hotRankResult": {
                        "totalSize": 100,
                        "rankItemList": [
                            {
                                "title": "庆余年第二季",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002002kqssyu1715223183563/260",
                                "lines": [
                                    "2024 张若昀 李沁 陈道明 吴刚 田雨 李小冉 俞飞鸿 袁泉 毛晓彤 郭麒麟 宋轶 辛芷蕾 宁理 刘端端 张昊唯 付辛博 高曙光 赵柯 于洋 李强 刘桦 佟梦实 郭子凡 金晨 王楚然 高露 王晓晨 隋俊波 归亚蕾 余皑磊 毕彦君 罗二羊 吴幸键 宣言 王庆祥 徐志胜"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破2000万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.6万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.0"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "轻喜剧"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "头脑博弈"
                                    },
                                    {
                                        "type": 90,
                                        "content": "反转"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002002kqssyu",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破2000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.6万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.0\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"轻喜剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"头脑博弈\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"反转\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "柳舟记",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200c9usasa1697979259711/260",
                                "lines": [
                                    "2024 张晚意 王楚然 刘令姿 常华森 张弛 袁雨萱"
                                ],
                                "tags": [
                                    {
                                        "type": 50,
                                        "content": "讨论破100万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超2.5万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.0"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "偶像爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "失忆"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200c9usasa",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"讨论破100万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超2.5万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.0\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"偶像爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"失忆\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "情刺",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200u3ayosi1722929726269/260",
                                "lines": [
                                    "2024 何宣林 严子贤 高铭辰 莫寒"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.8万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "相爱相杀"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200u3ayosi",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.8万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"相爱相杀\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "玫瑰的故事",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002002s2ark51717137587048/260",
                                "lines": [
                                    "2024 刘亦菲 佟大为 林更新 万茜 林一 彭冠英 霍建华 朱珠 吴彼 王名扬 黄羿 夏力薪 于慧 阎青妤 蓝盈莹 陈瑶 吴玉芳 侯长荣 张月"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破500万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破500万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.5万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "女性题材"
                                    },
                                    {
                                        "type": 80,
                                        "content": "都市爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "都市生活"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "女性成长"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002002s2ark5",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破500万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破500万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.5万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"女性题材\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"都市爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"都市生活\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"女性成长\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "长相思 第二季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200u8vfzcz1719505373327/260",
                                "lines": [
                                    "2024 杨紫 张晚意 邓为 檀健次 代露娃 王弘毅"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破1000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破3000万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.1"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "奇幻爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "拯救爱人"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200u8vfzcz",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破1000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破3000万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.1\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"奇幻爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"拯救爱人\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "月升沧海",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200vmd652y1658930222301/260",
                                "lines": [
                                    "2022 吴磊 赵露思 郭涛 曾黎 保剑锋 童蕾 李昀锐 余承恩 徐娇 曹曦文 施诗"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破1000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破100万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.3"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "宅门风云"
                                    },
                                    {
                                        "type": 80,
                                        "content": "轻喜剧"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "女性成长"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200vmd652y",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破1000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破100万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.3\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"宅门风云\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"轻喜剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"女性成长\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "爱情公寓3",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/zaasslvhhyy1sg71689740882558/260",
                                "lines": [
                                    "2012 陈赫 娄艺潇 赵霁 孙艺洲 王传君 邓家佳 金世佳 李金铭"
                                ],
                                "tags": [
                                    {
                                        "type": 30,
                                        "content": "评分 9.6"
                                    },
                                    {
                                        "type": 80,
                                        "content": "情景喜剧"
                                    },
                                    {
                                        "type": 80,
                                        "content": "经典喜剧"
                                    },
                                    {
                                        "type": 80,
                                        "content": "爱情喜剧"
                                    },
                                    {
                                        "type": 80,
                                        "content": "都市喜剧"
                                    },
                                    {
                                        "type": 80,
                                        "content": "都市爱情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "友情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "搞笑斗嘴"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "zaasslvhhyy1sg7",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"评分 9.6\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"情景喜剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"经典喜剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"爱情喜剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"都市喜剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"都市爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"友情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"搞笑斗嘴\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "江城诡事",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020041y8ec61721899582597/260",
                                "lines": [
                                    "2024 夏之光 吴希泽 王之一"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.9万"
                                    },
                                    {
                                        "type": 90,
                                        "content": "搭档破案"
                                    },
                                    {
                                        "type": 90,
                                        "content": "犯罪心理"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc0020041y8ec6",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.9万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"搭档破案\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"犯罪心理\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "长相思 第一季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc002003rpvd4j1689930008384/260",
                                "lines": [
                                    "2023 杨紫 张晚意 邓为 檀健次 代露娃 王弘毅"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破500万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破5000万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.4"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "奇幻爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "拯救爱人"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002003rpvd4j",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破500万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破5000万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.4\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"奇幻爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"拯救爱人\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "你比星光美丽",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002004n42g5b1719201442910/260",
                                "lines": [
                                    "2024 谭松韵 许凯 何瑞贤 高寒"
                                ],
                                "tags": [
                                    {
                                        "type": 50,
                                        "content": "讨论破300万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.1"
                                    },
                                    {
                                        "type": 80,
                                        "content": "都市爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "偶像爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "旧情复燃"
                                    },
                                    {
                                        "type": 90,
                                        "content": "创业"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002004n42g5b",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"讨论破300万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.1\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"都市爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"偶像爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"旧情复燃\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"创业\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            }
                        ]
                    },
                    "jumpLink": "txvideo://v.qq.com/FindMovieCenterActivity?type=channel_list_nav&selectTabId=bd&dataKey=channel_id%3D100113%26url%3D%25252F%25253Fpgid%25253DrankMain%2525253Drank300001%25252526rankSub%2525253D38ab5f5a93707308b5463548ed67f6f4"
                },
                {
                    "tabName": "电影",
                    "tabId": "1",
                    "tabDataKey": "datakey=srh_oper_hot_list&channelID=1",
                    "backgroundLightImg": "",
                    "titleLightImg": "http://puui.qpic.cn/media_img/lena/PIC3jb2l6_72_600/0",
                    "backgroundDarkImg": "",
                    "titleDarkImg": "http://puui.qpic.cn/media_img/lena/PICtj495i_72_600/0",
                    "hotRankResult": {
                        "totalSize": 100,
                        "rankItemList": [
                            {
                                "title": "白蛇：浮生",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200w3x7ox51704941422537/260",
                                "lines": [
                                    "2024 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "奇幻爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫电影"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动画电影"
                                    },
                                    {
                                        "type": 80,
                                        "content": "民间故事改编"
                                    },
                                    {
                                        "type": 80,
                                        "content": "非少儿动画"
                                    },
                                    {
                                        "type": 90,
                                        "content": "跨种族爱情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "民间故事"
                                    },
                                    {
                                        "type": 90,
                                        "content": "东方神话"
                                    },
                                    {
                                        "type": 90,
                                        "content": "东方美学"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200w3x7ox5",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"奇幻爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫电影\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动画电影\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"民间故事改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"非少儿动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"跨种族爱情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"民间故事\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方神话\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方美学\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "云边有个小卖部",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200ebzfc5n1714275502525/260",
                                "lines": [
                                    "2024 内地 彭昱畅 周也 艾丽娅 陈贤恩 孔连顺"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.6万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "青春成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "心灵成长"
                                    },
                                    {
                                        "type": 90,
                                        "content": "祖孙情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "小清新"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200ebzfc5n",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.6万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"青春成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"心灵成长\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"祖孙情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小清新\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "白蛇：缘起",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/hzssbvhzc7xyr951566894411/260",
                                "lines": [
                                    "2019 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "虐心爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "奇幻爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫电影"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动画电影"
                                    },
                                    {
                                        "type": 80,
                                        "content": "神话传说"
                                    },
                                    {
                                        "type": 80,
                                        "content": "民间故事改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "唯美"
                                    },
                                    {
                                        "type": 90,
                                        "content": "跨种族爱情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "东方美学"
                                    },
                                    {
                                        "type": 90,
                                        "content": "民间故事"
                                    },
                                    {
                                        "type": 90,
                                        "content": "东方神话"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "hzssbvhzc7xyr95",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"虐心爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"奇幻爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫电影\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动画电影\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"神话传说\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"民间故事改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"唯美\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"跨种族爱情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方美学\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"民间故事\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方神话\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "异形",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/87zd07p6ok4h7r61567395195/260",
                                "lines": [
                                    "1979 英国 西格妮·韦弗 汤姆·斯凯里特 维罗尼卡·卡维特 哈利·戴恩·斯坦通 约翰·赫特"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "未来科幻"
                                    },
                                    {
                                        "type": 90,
                                        "content": "跨物种对决"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "87zd07p6ok4h7r6",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"未来科幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"跨物种对决\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "异形：夺命舰",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200pb3um4z1721645062034/260",
                                "lines": [
                                    "2024 美国 卡莉·史派妮 戴维·荣松 阿奇·雷诺 伊莎贝拉·莫奈 斯派克·费恩"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "科幻动作"
                                    },
                                    {
                                        "type": 90,
                                        "content": "跨物种对决"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200pb3um4z",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"科幻动作\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"跨物种对决\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "白蛇2：青蛇劫起",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002003vpbryd1631182425190/260",
                                "lines": [
                                    "2021 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 20,
                                        "content": "中国电影金鸡奖"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.2万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "奇幻冒险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "神话传说"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫电影"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动画电影"
                                    },
                                    {
                                        "type": 80,
                                        "content": "民间故事改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "女性成长"
                                    },
                                    {
                                        "type": 90,
                                        "content": "姐妹情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "民间故事"
                                    },
                                    {
                                        "type": 90,
                                        "content": "东方神话"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002003vpbryd",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"中国电影金鸡奖\",\"category\":20,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_awards%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.2万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"奇幻冒险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"神话传说\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫电影\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动画电影\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"民间故事改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"女性成长\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"姐妹情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"民间故事\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方神话\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "普罗米修斯",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/945g2u0ctnfx7u41567406296/260",
                                "lines": [
                                    "2012 美国 劳米·拉佩斯 迈克尔·法斯宾德 查理兹·塞隆 盖·皮尔斯 伊德瑞斯·艾尔巴"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.2万"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 80,
                                        "content": "科幻冒险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "硬科幻"
                                    },
                                    {
                                        "type": 90,
                                        "content": "跨物种对决"
                                    },
                                    {
                                        "type": 90,
                                        "content": "外星探索"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "945g2u0ctnfx7u4",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.2万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"科幻冒险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"硬科幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"跨物种对决\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"外星探索\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "熊出没·逆转时空",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200z75eesp1706155380009/260",
                                "lines": [
                                    "2024 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "科幻冒险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "贺岁片"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动画电影"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动漫改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "平行宇宙"
                                    },
                                    {
                                        "type": 90,
                                        "content": "营救同伴"
                                    },
                                    {
                                        "type": 90,
                                        "content": "正邪对抗"
                                    }
                                ],
                                "siteEnName": "hunantv",
                                "id": "mzc00200z75eesp",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"科幻冒险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"贺岁片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动画电影\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动漫改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"平行宇宙\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"营救同伴\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"正邪对抗\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "异形：契约",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/b12qx08vthze9311555058809/260",
                                "lines": [
                                    "2017 美国 迈克尔·法斯宾德 凯瑟琳·沃特斯顿 比利·克鲁德普 丹尼·麦克布耐德 德米安·比齐尔"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "科幻冒险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "硬科幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "美国电影"
                                    },
                                    {
                                        "type": 90,
                                        "content": "跨物种对决"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "b12qx08vthze931",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"科幻冒险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"硬科幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"美国电影\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"跨物种对决\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "打黑",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200fe30rfr1723711532426/260",
                                "lines": [
                                    "2024 内地 释小龙 包贝尔 曲栅栅 李大强 刘峰超 王正权 赵润南 高维蔓 王宏 周开开 孙彩纶"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "警匪打黑"
                                    },
                                    {
                                        "type": 90,
                                        "content": "警匪较量"
                                    },
                                    {
                                        "type": 90,
                                        "content": "格斗"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200fe30rfr",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"警匪打黑\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"警匪较量\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"格斗\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            }
                        ]
                    },
                    "jumpLink": "txvideo://v.qq.com/FindMovieCenterActivity?type=channel_list_nav&selectTabId=bd&dataKey=channel_id%3D100173%26url%3D%25252F%25253Fpgid%25253DrankMain%2525253Drank300003%25252526rankSub%2525253Dbb143826025e18b9bad70c0f95811959"
                },
                {
                    "tabName": "综艺",
                    "tabId": "10",
                    "tabDataKey": "datakey=srh_oper_hot_list&channelID=10",
                    "backgroundLightImg": "",
                    "titleLightImg": "http://puui.qpic.cn/media_img/lena/PICrzpf7o_72_600/0",
                    "backgroundDarkImg": "",
                    "titleDarkImg": "http://puui.qpic.cn/media_img/lena/PICdqkc04_72_600/0",
                    "hotRankResult": {
                        "totalSize": 100,
                        "rankItemList": [
                            {
                                "title": "喜人奇妙夜",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200vyot3cs1718618943841/260",
                                "lines": [
                                    "2024 黄渤 秦昊 贾冰 高圆圆 张雨绮 于和伟 马东 金靖 宋木子"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超2.1万"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200vyot3cs",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超2.1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "战至巅峰 第3季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002003dx2kq51723987840164/260",
                                "lines": [
                                    "2024"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.5万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "体育竞技"
                                    },
                                    {
                                        "type": 80,
                                        "content": "电竞"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002003dx2kq5",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.5万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"体育竞技\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"电竞\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "奔跑吧 第8季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200102dx2m1711445682088/260",
                                "lines": [
                                    "2024 李晨 郑恺 沙溢 白鹿 周深 范丞丞 宋雨琦 时代少年团张真源"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.4万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "游戏节目"
                                    },
                                    {
                                        "type": 90,
                                        "content": "明星体验"
                                    },
                                    {
                                        "type": 90,
                                        "content": "趣味游戏"
                                    },
                                    {
                                        "type": 90,
                                        "content": "卧底任务"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200102dx2m",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.4万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"游戏节目\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"明星体验\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"趣味游戏\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"卧底任务\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "喜人奇妙夜·纯享版",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002004oes3tm1719457514094/260",
                                "lines": [
                                    "2024 黄渤 秦昊 贾冰 高圆圆 马东 金靖 宋木子"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "喜剧竞演"
                                    },
                                    {
                                        "type": 80,
                                        "content": "喜剧表演"
                                    },
                                    {
                                        "type": 80,
                                        "content": "情景喜剧"
                                    },
                                    {
                                        "type": 90,
                                        "content": "即兴喜剧"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002004oes3tm",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"喜剧竞演\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"喜剧表演\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"情景喜剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"即兴喜剧\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "哈哈哈哈哈 第4季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200as5tv651704190353490/260",
                                "lines": [
                                    "2024"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.4万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "游戏节目"
                                    },
                                    {
                                        "type": 80,
                                        "content": "生活体验"
                                    },
                                    {
                                        "type": 80,
                                        "content": "旅行节目"
                                    },
                                    {
                                        "type": 90,
                                        "content": "明星体验"
                                    },
                                    {
                                        "type": 90,
                                        "content": "趣味游戏"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200as5tv65",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.4万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"游戏节目\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"生活体验\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"旅行节目\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"明星体验\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"趣味游戏\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "脱口秀和Ta的朋友们",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200urn78dn1723713669682/260",
                                "lines": [
                                    "2024"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超2万"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200urn78dn",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超2万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "超新星运动会 第5季",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200lyahj8y1719287801262/260",
                                "lines": [
                                    "2024"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.8万"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200lyahj8y",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.8万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "五十公里桃花坞 第4季",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200x172sej1716368593474/260",
                                "lines": [
                                    "2024"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.5万"
                                    },
                                    {
                                        "type": 70,
                                        "content": "慢综艺"
                                    },
                                    {
                                        "type": 80,
                                        "content": "生活体验"
                                    },
                                    {
                                        "type": 80,
                                        "content": "社交观察"
                                    },
                                    {
                                        "type": 90,
                                        "content": "明星体验"
                                    },
                                    {
                                        "type": 90,
                                        "content": "明星生活"
                                    },
                                    {
                                        "type": 90,
                                        "content": "风景欣赏"
                                    },
                                    {
                                        "type": 90,
                                        "content": "友情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "趣味游戏"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200x172sej",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.5万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"慢综艺\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"生活体验\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"社交观察\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"明星体验\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"明星生活\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"风景欣赏\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"友情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"趣味游戏\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "毛雪汪",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200xkb43kw1709271267080/260",
                                "lines": [
                                    "2024 毛不易 李雪琴"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.4万"
                                    },
                                    {
                                        "type": 90,
                                        "content": "明星生活"
                                    },
                                    {
                                        "type": 90,
                                        "content": "友情"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200xkb43kw",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.4万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"明星生活\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"友情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "王牌对王牌 第8季",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200rtizgs11696999154360/260",
                                "lines": [
                                    "2023"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.2万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "游戏节目"
                                    },
                                    {
                                        "type": 90,
                                        "content": "趣味游戏"
                                    },
                                    {
                                        "type": 90,
                                        "content": "卧底任务"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200rtizgs1",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.2万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"游戏节目\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"趣味游戏\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"卧底任务\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            }
                        ]
                    },
                    "jumpLink": "txvideo://v.qq.com/FindMovieCenterActivity?type=channel_list_nav&selectTabId=bd&dataKey=channel_id%3D100109%26url%3D%25252F%25253Fpgid%25253DrankMain%2525253Drank300002%25252526rankSub%2525253Dd517205b54b2608b70d88951097bdffc"
                },
                {
                    "tabName": "动漫",
                    "tabId": "3",
                    "tabDataKey": "datakey=srh_oper_hot_list&channelID=3",
                    "backgroundLightImg": "",
                    "titleLightImg": "http://puui.qpic.cn/media_img/lena/PICzqptwa_72_600/0",
                    "backgroundDarkImg": "",
                    "titleDarkImg": "http://puui.qpic.cn/media_img/lena/PICfbon43_72_600/0",
                    "hotRankResult": {
                        "totalSize": 100,
                        "rankItemList": [
                            {
                                "title": "剑来",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020072zgk611721874669799/260",
                                "lines": [
                                    "2024 内地 陈平安 齐静春 宁姚 刘羡阳 顾璨"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.9万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.5"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 70,
                                        "content": "动作炫酷"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方仙侠"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "逆袭"
                                    },
                                    {
                                        "type": 90,
                                        "content": "武修"
                                    },
                                    {
                                        "type": 90,
                                        "content": "中国风"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc0020072zgk61",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.9万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.5\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动作炫酷\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方仙侠\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"逆袭\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"武修\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"中国风\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "斗罗大陆Ⅱ绝世唐门",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200xf3rir61722917091919/260",
                                "lines": [
                                    "2023 内地 霍雨浩 唐舞桐 贝贝 和菜头 徐三石 江楠楠 萧萧"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "热血战斗"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "技能对拼"
                                    },
                                    {
                                        "type": 90,
                                        "content": "科技发明"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200xf3rir6",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"热血战斗\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"技能对拼\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"科技发明\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "斗破苍穹年番",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020027yzd9e1723195259313/260",
                                "lines": [
                                    "2022 内地 萧炎 美杜莎 萧薰儿 小医仙 云韵"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破2000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破500万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "热血战斗"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "逆袭"
                                    },
                                    {
                                        "type": 90,
                                        "content": "重回巅峰"
                                    },
                                    {
                                        "type": 90,
                                        "content": "技能对拼"
                                    },
                                    {
                                        "type": 90,
                                        "content": "友情"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc0020027yzd9e",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破2000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破500万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"热血战斗\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"逆袭\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"重回巅峰\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"技能对拼\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"友情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "完美世界",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mcv8hkc8zk8lnov1722320529103/260",
                                "lines": [
                                    "2021 内地 石昊 柳神"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破3000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破5000万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.5"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mcv8hkc8zk8lnov",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破3000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破5000万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.5\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "斗罗大陆",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/m441e3rjq9kwpsc1700874697596/260",
                                "lines": [
                                    "2018 内地 唐三 小舞 戴沐白 奥斯卡 马红俊 宁荣荣 朱竹清"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破5000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破300万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "热血战斗"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "技能对拼"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "m441e3rjq9kwpsc",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破5000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破300万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"热血战斗\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"技能对拼\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "吞噬星空",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/324olz7ilvo2j5f1722937217565/260",
                                "lines": [
                                    "2020 内地 罗峰 徐欣 巴巴塔"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破2000万"
                                    },
                                    {
                                        "type": 50,
                                        "content": "讨论破100万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.9万"
                                    },
                                    {
                                        "type": 70,
                                        "content": "特效炸裂"
                                    },
                                    {
                                        "type": 80,
                                        "content": "未来科幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "英雄成长"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "324olz7ilvo2j5f",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破2000万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"讨论破100万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.9万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"特效炸裂\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"未来科幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"英雄成长\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "茶啊二中 第5季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200yxnj6nj1720519320978/260",
                                "lines": [
                                    "2024 内地 王强 刘若琳"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.7万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.6"
                                    },
                                    {
                                        "type": 80,
                                        "content": "搞笑动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "校园日常"
                                    },
                                    {
                                        "type": 80,
                                        "content": "原创动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "友情"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200yxnj6nj",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.7万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.6\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"搞笑动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"校园日常\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"原创动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"友情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "仙逆",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200aaogpgh1708244685423/260",
                                "lines": [
                                    "2023 内地 王林 李慕婉 司徒南 许立国 柳眉"
                                ],
                                "tags": [
                                    {
                                        "type": 50,
                                        "content": "讨论破300万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.8万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.3"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方玄幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "东方仙侠"
                                    },
                                    {
                                        "type": 80,
                                        "content": "玄幻修真"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "逆袭"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200aaogpgh",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"讨论破300万\",\"category\":50,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_Comment%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.8万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.3\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方玄幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"东方仙侠\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"玄幻修真\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"逆袭\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "斩神之凡尘神域",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002006znrsl71721095123461/260",
                                "lines": [
                                    "2024 内地 林七夜"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.8万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.7"
                                    },
                                    {
                                        "type": 80,
                                        "content": "都市奇幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "热血战斗"
                                    },
                                    {
                                        "type": 80,
                                        "content": "3D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "国漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "跨物种对决"
                                    },
                                    {
                                        "type": 90,
                                        "content": "末世生存"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002006znrsl7",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.8万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.7\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"都市奇幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"热血战斗\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"3D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"国漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"跨物种对决\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"末世生存\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "名侦探柯南[普通话版]",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/hzgtnf6tbvfekfv1555149409/260",
                                "lines": [
                                    "1996 日本 江户川柯南 毛利小五郎 毛利兰 灰原哀 工藤新一 阿笠博士 吉田步美 圆谷光彦 小岛元太 铃木园子"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.5万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.3"
                                    },
                                    {
                                        "type": 70,
                                        "content": "童年记忆"
                                    },
                                    {
                                        "type": 80,
                                        "content": "经典动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "漫画改编"
                                    },
                                    {
                                        "type": 80,
                                        "content": "2D动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "日漫"
                                    },
                                    {
                                        "type": 90,
                                        "content": "警匪较量"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "hzgtnf6tbvfekfv",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.5万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.3\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"童年记忆\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"经典动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"漫画改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"2D动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"日漫\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"警匪较量\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            }
                        ]
                    },
                    "jumpLink": "txvideo://v.qq.com/FindMovieCenterActivity?type=channel_list_nav&selectTabId=bd&dataKey=channel_id%3D100119%26url%3D%25252F%25253Fpgid%25253DrankMain%2525253Drank300005%25252526rankSub%2525253D0f2ca4b0c4a2f0fb8e3aa6c099a574db"
                },
                {
                    "tabName": "少儿",
                    "tabId": "106",
                    "tabDataKey": "datakey=srh_oper_hot_list&channelID=106",
                    "backgroundLightImg": "",
                    "titleLightImg": "http://puui.qpic.cn/media_img/lena/PICc3cwgk_72_600/0",
                    "backgroundDarkImg": "",
                    "titleDarkImg": "http://puui.qpic.cn/media_img/lena/PIC3xdq57_72_600/0",
                    "hotRankResult": {
                        "totalSize": 100,
                        "rankItemList": [
                            {
                                "title": "小猪佩奇第10季[普通话版]",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002006huuuiu1721269120545/260",
                                "lines": [
                                    "2024 英国 佩奇 乔治 苏西 猪爸爸 猪妈妈"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.3万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "益智早教"
                                    },
                                    {
                                        "type": 80,
                                        "content": "生活故事动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物主题动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "海外少儿"
                                    },
                                    {
                                        "type": 90,
                                        "content": "情商教育"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002006huuuiu",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.3万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"益智早教\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"生活故事动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物主题动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"海外少儿\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"情商教育\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "宝贝赳赳 第五季",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200xft9wec1671003242977/260",
                                "lines": [
                                    "2022 内地 赳赳"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "儿歌"
                                    },
                                    {
                                        "type": 80,
                                        "content": "益智早教"
                                    },
                                    {
                                        "type": 80,
                                        "content": "音乐动画"
                                    },
                                    {
                                        "type": 90,
                                        "content": "行为习惯"
                                    },
                                    {
                                        "type": 90,
                                        "content": "常识百科"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200xft9wec",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"儿歌\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"益智早教\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"音乐动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"行为习惯\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"常识百科\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "汪汪队立大功第八季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200ikwauh81659061559921/260",
                                "lines": [
                                    "2021 美国 莱德 阿奇 毛毛 天天 小砾 路马 灰灰"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破500万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "儿童历险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物主题动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "海外少儿"
                                    },
                                    {
                                        "type": 90,
                                        "content": "救援"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200ikwauh8",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破500万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"儿童历险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物主题动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"海外少儿\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"救援\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "乐高幻影忍者",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/jo9b2oxhk5f3jlx1703053014207/260",
                                "lines": [
                                    "2011 美国 凯 杰 寇 赞 劳埃德"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破100万"
                                    },
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.3万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "战斗冒险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "儿童历险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "海外少儿"
                                    },
                                    {
                                        "type": 80,
                                        "content": "男孩向"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "jo9b2oxhk5f3jlx",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破100万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"实时热度超1.3万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"战斗冒险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"儿童历险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"海外少儿\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"男孩向\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "熊出没之小小世界",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200qm225py1709174083989/260",
                                "lines": [
                                    "2024 内地 熊大 熊二 光头强"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "儿童历险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "异域冒险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物主题动画"
                                    },
                                    {
                                        "type": 90,
                                        "content": "保卫家园"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200qm225py",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"儿童历险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"异域冒险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物主题动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"保卫家园\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "小马宝莉友谊的魔力第一季",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/2rol166n5coddcb1551166834/260",
                                "lines": [
                                    "2010 美国 暮光闪闪 云宝黛西 萍琪派 史派克 苹果嘉儿 瑞瑞 小蝶"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "奇幻魔法"
                                    },
                                    {
                                        "type": 80,
                                        "content": "魔幻科幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "海外少儿"
                                    },
                                    {
                                        "type": 80,
                                        "content": "女孩向"
                                    },
                                    {
                                        "type": 90,
                                        "content": "情商教育"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "2rol166n5coddcb",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"奇幻魔法\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"魔幻科幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"海外少儿\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"女孩向\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"情商教育\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "熊出没之夏日连连看",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/m2lbjjlfidqc8iu1550480428/260",
                                "lines": [
                                    "2014 内地 光头强 熊二 熊大"
                                ],
                                "tags": [
                                    {
                                        "type": 60,
                                        "content": "在追破100万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物主题动画"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "m2lbjjlfidqc8iu",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"在追破100万\",\"category\":60,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/AddList_Selected%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物主题动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "喜羊羊与灰太狼之疯狂超能营",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002007x81c5g1719221391738/260",
                                "lines": [
                                    "2024 内地 喜羊羊 懒羊羊 沸羊羊 美羊羊 慢羊羊 暖羊羊 灰太狼 红太狼 小灰灰"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "儿童历险"
                                    },
                                    {
                                        "type": 80,
                                        "content": "魔幻科幻"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物主题动画"
                                    },
                                    {
                                        "type": 90,
                                        "content": "保卫家园"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002007x81c5g",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"儿童历险\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"魔幻科幻\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物主题动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"保卫家园\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "安全警长啦咘啦哆第二季",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200uv4w4es1712909739139/260",
                                "lines": [
                                    "2023 内地 啦咘啦哆 杜兵"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.1万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "生活故事动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "益智早教"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物主题动画"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200uv4w4es",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"生活故事动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"益智早教\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物主题动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "奶龙与小七之大战暴暴龙",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200xu7y3dr1705650271775/260",
                                "lines": [
                                    "2024 内地 奶龙 小七 暴暴龙"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "生活故事动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "搞笑动画"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物主题动画"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200xu7y3dr",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"生活故事动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"搞笑动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物主题动画\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            }
                        ]
                    },
                    "jumpLink": "txvideo://v.qq.com/FindMovieCenterActivity?type=channel_list_nav&selectTabId=bd&dataKey=channel_id%3D100150%26url%3D%25252F%25253Fpgid%25253DrankMain%2525253Drank300004%25252526rankSub%2525253D569b7fc64da88814f17708c170e34015"
                },
                {
                    "tabName": "纪录片",
                    "tabId": "9",
                    "tabDataKey": "datakey=srh_oper_hot_list&channelID=9",
                    "backgroundLightImg": "",
                    "titleLightImg": "http://puui.qpic.cn/media_img/lena/PICpej5qo_72_600/0",
                    "backgroundDarkImg": "",
                    "titleDarkImg": "http://puui.qpic.cn/media_img/lena/PIC8ln2qr_72_600/0",
                    "hotRankResult": {
                        "totalSize": 100,
                        "rankItemList": [
                            {
                                "title": "扬声",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200bo9alfh1723390160206/260",
                                "lines": [
                                    "2024 内地 张扬 桂海潮 董宇辉 冯骥 易烊千玺 王贻芳 郭帆 李格宾 何同学 宋亮 杨永平"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.4万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.7"
                                    },
                                    {
                                        "type": 80,
                                        "content": "名人访谈"
                                    },
                                    {
                                        "type": 80,
                                        "content": "社会纪录片"
                                    },
                                    {
                                        "type": 80,
                                        "content": "人物故事"
                                    },
                                    {
                                        "type": 90,
                                        "content": "行业揭秘"
                                    },
                                    {
                                        "type": 90,
                                        "content": "袒露心声"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200bo9alfh",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.4万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.7\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"名人访谈\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"社会纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"人物故事\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"行业揭秘\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"袒露心声\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "十三邀 第八季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200382r10m1706967434378/260",
                                "lines": [
                                    "2024 内地 许知远 许倬云 谭元元"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.7"
                                    },
                                    {
                                        "type": 80,
                                        "content": "文化纪录片"
                                    },
                                    {
                                        "type": 80,
                                        "content": "名人访谈"
                                    },
                                    {
                                        "type": 80,
                                        "content": "文化探讨"
                                    },
                                    {
                                        "type": 90,
                                        "content": "袒露心声"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200382r10m",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.7\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"文化纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"名人访谈\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"文化探讨\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"袒露心声\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "布达拉宫",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002006y4s5on1699955940713/260",
                                "lines": [
                                    "2024 内地 胡歌"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.2万"
                                    },
                                    {
                                        "type": 30,
                                        "content": "评分 9.5"
                                    },
                                    {
                                        "type": 80,
                                        "content": "文化纪录片"
                                    },
                                    {
                                        "type": 90,
                                        "content": "地域文化"
                                    },
                                    {
                                        "type": 90,
                                        "content": "人文风貌"
                                    },
                                    {
                                        "type": 90,
                                        "content": "历史建筑"
                                    },
                                    {
                                        "type": 90,
                                        "content": "民风民俗"
                                    },
                                    {
                                        "type": 90,
                                        "content": "物质文化遗产"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002006y4s5on",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.2万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"评分 9.5\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"文化纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"地域文化\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"人文风貌\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"历史建筑\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"民风民俗\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"物质文化遗产\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "航拍中国 第1季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/nmklgfekwjfe7931524829076/260",
                                "lines": [
                                    "2017 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 70,
                                        "content": "画面精美"
                                    },
                                    {
                                        "type": 80,
                                        "content": "旅游纪录片"
                                    },
                                    {
                                        "type": 90,
                                        "content": "地理风情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "人文风貌"
                                    },
                                    {
                                        "type": 90,
                                        "content": "风景欣赏"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "nmklgfekwjfe793",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"画面精美\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"旅游纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"地理风情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"人文风貌\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"风景欣赏\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "河西走廊",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/gm2yp3b46s3rg881533798594/260",
                                "lines": [
                                    "2018 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 30,
                                        "content": "评分 9.6"
                                    },
                                    {
                                        "type": 80,
                                        "content": "历史纪录片"
                                    },
                                    {
                                        "type": 90,
                                        "content": "河西走廊"
                                    },
                                    {
                                        "type": 90,
                                        "content": "中国史"
                                    },
                                    {
                                        "type": 90,
                                        "content": "历史科普"
                                    },
                                    {
                                        "type": 90,
                                        "content": "丝绸之路"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "gm2yp3b46s3rg88",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"评分 9.6\",\"category\":30,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_score%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"历史纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"河西走廊\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"中国史\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"历史科普\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"丝绸之路\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "航拍中国 第3季",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200ak6c3j91590122095997/260",
                                "lines": [
                                    "2020 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 70,
                                        "content": "画面精美"
                                    },
                                    {
                                        "type": 80,
                                        "content": "旅游纪录片"
                                    },
                                    {
                                        "type": 90,
                                        "content": "地理风情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "人文风貌"
                                    },
                                    {
                                        "type": 90,
                                        "content": "风景欣赏"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200ak6c3j9",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"画面精美\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"旅游纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"地理风情\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"人文风貌\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"风景欣赏\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "自然之声[普通话]",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200du2p38m1723172527488/260",
                                "lines": [
                                    "2024 英国"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "自然纪录片"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物纪录片"
                                    },
                                    {
                                        "type": 90,
                                        "content": "动物世界"
                                    },
                                    {
                                        "type": 90,
                                        "content": "动物行为"
                                    },
                                    {
                                        "type": 90,
                                        "content": "动物生存"
                                    },
                                    {
                                        "type": 90,
                                        "content": "自然环境"
                                    },
                                    {
                                        "type": 90,
                                        "content": "动物科普"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200du2p38m",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"自然纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物世界\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物行为\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物生存\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"自然环境\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物科普\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "千古风流人物 第1季",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200rwpg8pz1634186858171/260",
                                "lines": [
                                    "2021 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "文化纪录片"
                                    },
                                    {
                                        "type": 90,
                                        "content": "中国文学"
                                    },
                                    {
                                        "type": 90,
                                        "content": "文学品读"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200rwpg8pz",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"文化纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"中国文学\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"文学品读\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "山海经奇2",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200jjebmxe1710745369669/260",
                                "lines": [
                                    "2024 内地"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "文化纪录片"
                                    },
                                    {
                                        "type": 80,
                                        "content": "神话传说"
                                    },
                                    {
                                        "type": 80,
                                        "content": "文化探讨"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200jjebmxe",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"文化纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"神话传说\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"文化探讨\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "地球脉动 第3季[中文版]",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200s9hvibp1698046483704/260",
                                "lines": [
                                    "2023 英国 大卫·爱登堡"
                                ],
                                "tags": [
                                    {
                                        "type": 70,
                                        "content": "画面精美"
                                    },
                                    {
                                        "type": 70,
                                        "content": "视听盛宴"
                                    },
                                    {
                                        "type": 80,
                                        "content": "自然纪录片"
                                    },
                                    {
                                        "type": 80,
                                        "content": "动物纪录片"
                                    },
                                    {
                                        "type": 90,
                                        "content": "动物世界"
                                    },
                                    {
                                        "type": 90,
                                        "content": "自然风光"
                                    },
                                    {
                                        "type": 90,
                                        "content": "动物行为"
                                    },
                                    {
                                        "type": 90,
                                        "content": "自然环境"
                                    },
                                    {
                                        "type": 90,
                                        "content": "风景欣赏"
                                    },
                                    {
                                        "type": 90,
                                        "content": "动物科普"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200k4cgltp",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"画面精美\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"视听盛宴\",\"category\":70,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"自然纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物纪录片\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物世界\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"自然风光\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物行为\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"自然环境\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"风景欣赏\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"动物科普\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            }
                        ]
                    },
                    "jumpLink": "txvideo://v.qq.com/FindMovieCenterActivity?type=channel_list_nav&selectTabId=bd&dataKey=channel_id%3D100105%26url%3D%25252F%25253Fpgid%25253DrankMain%2525253Drank300006%25252526rankSub%2525253Dc34731cc6f1a84e8f9ee04e4421794eb"
                },
                {
                    "tabName": "微短剧",
                    "tabId": "26",
                    "tabDataKey": "datakey=srh_oper_hot_list&channelID=26",
                    "backgroundLightImg": "",
                    "titleLightImg": "https://media-img.puui.qpic.cn/media_img/0/lena/PIC7dqvcg_600_72/0",
                    "backgroundDarkImg": "",
                    "titleDarkImg": "https://media-img.puui.qpic.cn/media_img/0/lena/PICem2vxr_600_72/0",
                    "hotRankResult": {
                        "totalSize": 100,
                        "rankItemList": [
                            {
                                "title": "情刺",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200u3ayosi1722929726269/260",
                                "lines": [
                                    "2024 何宣林 严子贤 高铭辰 莫寒"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.8万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "相爱相杀"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200u3ayosi",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.8万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"相爱相杀\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "江城诡事",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020041y8ec61721899582597/260",
                                "lines": [
                                    "2024 夏之光 吴希泽 王之一"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.9万"
                                    },
                                    {
                                        "type": 90,
                                        "content": "搭档破案"
                                    },
                                    {
                                        "type": 90,
                                        "content": "犯罪心理"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc0020041y8ec6",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.9万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"搭档破案\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"犯罪心理\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "唐朝异闻录",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200kusah9g1721275070463/260",
                                "lines": [
                                    "2024 管栎 何泊远 蒋申 吴春怡"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "古装悬疑"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200kusah9g",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"古装悬疑\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "锦医风华",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200xova97f1720661881892/260",
                                "lines": [
                                    "2024 孙艺宁 王庭旭"
                                ],
                                "tags": [
                                    {
                                        "type": 40,
                                        "content": "实时热度超1.9万"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc00200xova97f",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"实时热度超1.9万\",\"category\":40,\"ui_type\":3,\"background_color_light\":\"#FFF1DC\",\"background_color_dark\":\"#231B11\",\"font_color_light\":\"#B07215\",\"font_color_dark\":\"#C0954C\",\"icon_color_light\":\"#B07215\",\"icon_color_dark\":\"#C0954C\",\"icon_link\":\"https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/icon_hot%403x.png\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "木匠奇事",
                                "changeOrder": 0,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc003quyksf3bg1721383235/260",
                                "lines": [],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "悬疑剧"
                                    },
                                    {
                                        "type": 90,
                                        "content": "探寻真相"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc003quyksf3bg",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"悬疑剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"探寻真相\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "执笔",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002001crc87t1707365038117/260",
                                "lines": [
                                    "2024 李沐宸 叶盛佳"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "奇幻爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc002001crc87t",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"奇幻爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "孕期被霸总宠上天",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc003tr2bfuwzf1723207697/260",
                                "lines": [],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "都市爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "偶像爱情"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc003tr2bfuwzf",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"都市爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"偶像爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "玉奴娇",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020016ovze01715932855431/260",
                                "lines": [
                                    "2024 徐轸轸 程宇峰 滕泽文 田广宇 林诗邯 叶啸秋 杜黛"
                                ],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "小说改编"
                                    },
                                    {
                                        "type": 90,
                                        "content": "相爱相杀"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc0020016ovze0",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"小说改编\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"相爱相杀\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "宫墙雪",
                                "changeOrder": 1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc003d0nrbv69h1720405265/260",
                                "lines": [],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "古装短剧"
                                    },
                                    {
                                        "type": 80,
                                        "content": "甜虐爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "古装爱情"
                                    },
                                    {
                                        "type": 90,
                                        "content": "反转"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc003d0nrbv69h",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"古装短剧\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"甜虐爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"古装爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"反转\",\"category\":90,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            },
                            {
                                "title": "《攀缠》全集",
                                "changeOrder": -1,
                                "querySrc": 0,
                                "querySrc2": "",
                                "querySrcStr": "",
                                "url": "",
                                "imgUrl": "https://puui.qpic.cn/vcover_vt_pic/0/mzc003er3556jhb1723605543/260",
                                "lines": [],
                                "tags": [
                                    {
                                        "type": 80,
                                        "content": "都市爱情"
                                    },
                                    {
                                        "type": 80,
                                        "content": "虐心爱情"
                                    }
                                ],
                                "siteEnName": "qq",
                                "id": "mzc003er3556jhb",
                                "dataType": 2,
                                "labels": [
                                    "{\"label\":\"都市爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}",
                                    "{\"label\":\"虐心爱情\",\"category\":80,\"ui_type\":1,\"background_color_light\":\"rgba(17,17,17,0.04)\",\"background_color_dark\":\"rgba(242,242,242,0.12)\",\"font_color_light\":\"#111111\",\"font_color_dark\":\"#F2F2F2\",\"icon_color_light\":\"\",\"icon_color_dark\":\"\",\"icon_link\":\"\",\"jump_link\":\"\"}"
                                ]
                            }
                        ]
                    },
                    "jumpLink": "txvideo://v.qq.com/FindMovieCenterActivity?type=channel_list_nav&selectTabId=bd&dataKey=channel_id%3D100173%26url%3D%25252F%25253Fpgid%25253DrankMain%2525253Drank300009%25252526rankSub%2525253D77704b249053346d6befa23515826f7a"
                },
            ]
        }
    }

    const getTopList = async () => {
        const result = await getTopListApi()
        if (result.data) {
            setTopList(result.data)
            let tabList: any = []
            result.data.forEach(item => {
                let findData = videoTypeList.find((item2: any) => item2.tabId == item.tabId)
                if (findData) tabList.push(findData)
            })
            setVideoTypeList(tabList)
        }
    }

    const getSearchList = debounce(async (e: { target: { value: any; }; }) => {
        console.log("搜索")
        const result = await getSearchListApi({title: e.target.value})
        if (result.data) setSearchList(result.data)
    }, 200)

    const goToSearchDetail = async (e: { target: { value: any; }; }) => {
        console.log("搜索进入详情")
        const result = await getSearchDetailApi({title: e.target.value})
        const searchHistory: string = localStorage.getItem("searchHistory") || `[]`
        let arr: Array<string> = JSON.parse(searchHistory)
        arr.push(e.target.value)
        localStorage.setItem("searchHistory", JSON.stringify(arr))
        if (result.data.id) await router.push(`/mobile/search/detail/${result.data.id}`)
    }

    const toSearch = () => {
        router.push(`/mobile/search`)
    }

    const cancelSearch = () => {
        console.log(3333)
        console.log(router)
        router.back()
    }

    const getHistory = () => {
        const searchHistory: string = localStorage.getItem("searchHistory") || `[]`
        return JSON.parse(searchHistory)
    }

    const clearHistory = () => {
        localStorage.setItem("searchHistory", JSON.stringify([]))
    }

    return {
        goToSearchDetail,
        getSearchList,
        toSearch,
        cancelSearch,
        searchList,
        videoTypeList,
        getHistory,
        clearHistory,
        topList,
        getTopList
    }
}
export default useSearch