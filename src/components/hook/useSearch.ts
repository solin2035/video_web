import {useState} from "react";
import {useRouter} from "next/router";
import {debounce} from "lodash"

interface searchListType {
    id: number,
    title: string
}

interface searchParams {
    title: string
}

const useSearch = () => {
    const router = useRouter()
    const [searchList, setSearchList] = useState<searchListType[]>([])

    /**
     * 模糊搜索列表
     * @param param
     */
    async function getSearchListApi(param: searchParams) {
        return {data: [{id: 1, title: "1"}, {id: 2, title: "2"}]}
    }

    /**
     * 获取搜索详情
     * @param param
     */
    async function getSearchDetailApi(param: searchParams) {
        return {data: {id: 321}}
    }

    const getSearchList = debounce(async (e: { target: { value: any; }; }) => {
        console.log("搜索")
        const result = await getSearchListApi({title: e.target.value})
        if (result.data) setSearchList(result.data)
    }, 200)

    const goToSearchDetail = async (e: { target: { value: any; }; }) => {
        console.log("搜索进入详情")
        const result = await getSearchDetailApi({title: e.target.value})
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

    return {
        goToSearchDetail,
        getSearchList,
        toSearch,
        cancelSearch,
        searchList
    }
}
export default useSearch