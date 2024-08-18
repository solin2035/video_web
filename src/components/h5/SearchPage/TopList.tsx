import searchTopListStyle from "@/assets/styles/h5/searchTopList.module.scss"

interface TopTypeProp {
    title: string,
    list: Array<any>
}

const TopList = (props: TopTypeProp) => {
    const {title, list} = props

    return (
        <div className={searchTopListStyle.topListContent}>
            <h2>{title}</h2>
            <ul>
                {list.map((li: any, i: number) => <li key={i}>{li.name}</li>)}
            </ul>
        </div>
    )
}

export default TopList