import SearchStyle from "@/assets/styles/h5/search.module.scss"
import {Input} from "antd"
import useSearch from "@/components/hook/useSearch";
import {SearchOutlined} from '@ant-design/icons';
import TopList from "@/components/h5/SearchPage/TopList"
import SearchHistory from "@/components/h5/SearchPage/SearchHistory";

const Search = () => {
    const {cancelSearch, getSearchList, goToSearchDetail, videoTypeList} = useSearch()

    return (
        <div className={SearchStyle.search}>
            <div className={SearchStyle.searchTop}>
                <Input prefix={<SearchOutlined/>} allowClear className={SearchStyle.searchInput}
                       onPressEnter={(e: any) => goToSearchDetail(e)} onChange={getSearchList}></Input>
                <span className={SearchStyle.cancel} onClick={cancelSearch}>取消</span>
            </div>
            <SearchHistory/>
            <div className={SearchStyle.topContent}>
                <ul className="content">
                    {videoTypeList.map(type => <TopList title={type.title} key={type.id}></TopList>)}
                </ul>
            </div>
        </div>
    )
}

export default Search