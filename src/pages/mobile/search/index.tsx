import SearchStyle from "@/assets/styles/h5/search.module.scss"
import {Input} from "antd"
import useSearch from "@/components/hook/useSearch";
import {SearchOutlined} from '@ant-design/icons';
import TopList from "@/components/h5/SearchPage/TopList"
import SearchHistory from "@/components/h5/SearchPage/SearchHistory";
import {useEffect} from "react";

const Search = () => {
    const {cancelSearch, getSearchList, goToSearchDetail, videoTypeList, searchList, getTopList, topList} = useSearch()

    useEffect(() => {
        // 只在组件挂载后执行
        getTopList()
        return () => {
            // 只在组件卸载后执行
            console.log('组件卸载');
        };
    }, [])

    const getCurrentList = (tabId: number) => {
        console.log(topList)
        return topList.find((s: any) => s.tabId == tabId)?.hotRankResult?.rankItemList || []
    }

    return (
        <div className={SearchStyle.search}>
            <div className={SearchStyle.searchTop}>
                <Input prefix={<SearchOutlined/>} allowClear className={SearchStyle.searchInput}
                       onPressEnter={(e: any) => goToSearchDetail(e)} onChange={getSearchList}></Input>
                <span className={SearchStyle.cancel} onClick={cancelSearch}>取消</span>
            </div>
            <SearchHistory/>
            <div className={SearchStyle.topContent}>
                {videoTypeList.map((item: any) => (
                    <TopList
                        title={item.tabName}
                        key={item.tabId}
                        list={getCurrentList(item.tabId)}
                    >
                    </TopList>
                ))}
            </div>
        </div>
    )
}

export default Search