import useSearch from "@/components/hook/useSearch";
import SearchStyle from "@/assets/styles/h5/search.module.scss"
import {DeleteOutlined} from '@ant-design/icons';
import {useState} from "react";

const SearchHistory = () => {
    const {getHistory, clearHistory} = useSearch()
    const [historyList, setHistory] = useState(getHistory())

    const clear = () => {
        clearHistory()
        setHistory([])
    }

    return !!historyList.length &&
        <div className={SearchStyle.historyList}>
            <div className={SearchStyle.historyListTitle}>
                <span>搜索历史</span>
                <DeleteOutlined onClick={clear}/>
            </div>
            <div className={SearchStyle.historyListUl}>
                {historyList.map((item: string) => <div key={item} className={SearchStyle.historyListLi}>{item}</div>)}
            </div>
        </div>
}

export default SearchHistory