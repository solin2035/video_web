import SearchStyle from "@/assets/styles/h5/search.module.scss"
import {Input} from "antd"
import useSearch from "@/components/hook/useSearch";
import {SearchOutlined} from '@ant-design/icons';
import "@/assets/styles/h5/search.module.scss"

const Search = () => {
    const {cancelSearch, getSearchList} = useSearch()
    return (
        <div className={SearchStyle.search}>
            <div className={SearchStyle.searchTop}>
                <Input prefix={<SearchOutlined/>} allowClear className={SearchStyle.searchInput}
                       onPressEnter={getSearchList}></Input>
                <span className={SearchStyle.cancel} onClick={() => cancelSearch}>取消</span>
            </div>
        </div>
    )
}

export default Search