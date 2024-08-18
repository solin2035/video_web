import {useState} from "react";
import {useRouter} from "next/router";

const useSearch = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    async function getSearchListApi(param: {}) {

    }

    const getSearchList = async () => {
        setLoading(true)
        console.log("搜索")
        const res = await getSearchListApi({})
    }

    const toSearch = () => {
        router.push(`/mobile/search`)
    }

    const cancelSearch = () => {
        setSearch('')
        setSearchList([])
        setLoading(false)
        setPage(1)
        setTotal(0)
        setHasMore(true)
        console.log(3333)
        console.log(router)
        router.back()
    }

    return {
        search,
        setSearch,
        searchList,
        setSearchList,
        loading,
        setLoading,
        page,
        setPage,
        total,
        setTotal,
        hasMore,
        setHasMore,

        getSearchList,
        toSearch,
        cancelSearch
    }
}
export default useSearch