import searchTopListStyle from "@/assets/styles/h5/searchTopList.module.scss"

interface TopTypeProp {
    title: string
}

const TopList = (props: TopTypeProp) => {
    const {title} = props

    return (<li className={searchTopListStyle.topListContent}>{title}</li>)
}

export default TopList