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

    const getCurrentList = (id: number) => {
        return topList.find((s: any) => s.id === id)?.list || []
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
                {videoTypeList.map(type => (
                    <TopList
                        title={type.title}
                        key={type.id}
                        list={getCurrentList(type.id)}
                    >
                    </TopList>
                ))}
            </div>
        </div>
    )
}

export default Search