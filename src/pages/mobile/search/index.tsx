import SearchStyle from "@/assets/styles/h5/search.module.scss"
import {Input} from "antd"
import useSearch from "@/components/hook/useSearch";
import {SearchOutlined} from '@ant-design/icons';
import TopList from "@/components/h5/TopList"

const Search = () => {
    const {cancelSearch, getSearchList, goToSearchDetail} = useSearch()

    return (
        <div className={SearchStyle.search}>
            <div className={SearchStyle.searchTop}>
                <Input prefix={<SearchOutlined/>} allowClear className={SearchStyle.searchInput}
                       onPressEnter={(e: any) => goToSearchDetail(e)} onChange={getSearchList}></Input>
                <span className={SearchStyle.cancel} onClick={() => cancelSearch}>取消</span>
            </div>
            <TopList></TopList>
        </div>
    )
}

export default Search