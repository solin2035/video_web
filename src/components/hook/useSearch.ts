import {useState} from "react";
import {useRouter} from "next/router";
import {debounce} from "lodash"

interface searchListType {
    id: number,
    title: string,
}

interface topListType {
    id: number,
    list: Array<any>
}

interface searchParams {
    title: string
}

const useSearch = () => {
    const router = useRouter()
    const [searchList, setSearchList] = useState<Array<searchListType>>([{id: 0, title: ""}])
    const [topList, setTopList] = useState<Array<topListType>>([{id: 0, list: []}])

    const videoTypeList = [
        {id: 0, title: "热搜"},
        {id: 1, title: "电影"},
        {id: 2, title: "电视剧"},
        {id: 3, title: "综艺"},
        {id: 4, title: "动漫"},
        {id: 5, title: "纪录片"},
    ]

    /**
     * 模糊搜索列表
     * @param param
     */
    async function getSearchListApi(param: searchParams) {
        return {data: [{id: 1, title: "电影", list: []}, {id: 2, title: "电视剧", list: []}]}
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
        return {data: [{id: 1, list: [{id: "1111", name: "adasddasd"}, {id: "2222", name: "fasds"}]}]}
    }

    const getTopList = async () => {
        const result = await getTopListApi()
        if (result.data) setTopList(result.data)
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