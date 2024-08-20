import searchTopListStyle from "@/assets/styles/h5/searchTopList.module.scss"
import Image from "next/image"
interface TopTypeProp {
    title: string,
    list: Array<any>
}

const TopList = (props: TopTypeProp) => {
    const {title, list} = props

    const types = (labels: any) => {
        return labels.map((item: any) => {
            const labelData = JSON.parse(item)
            return {
                label: labelData.label,
                icon: labelData.icon_link,
            }
        })
    }

    return (
        <div className={searchTopListStyle.topListContent}>
            <h2>{title}</h2>
            <ul>
                {list.map((li: any, i: number) => <li key={i}>
                    <img src={li.imgUrl} alt={li.title}/>
                    <p>
                        <span>{li.title}</span>
                        <span>
                            {types(li.labels).map((tt: any) => <span key={tt.label} className="label_item">
                                {tt.icon && <Image src={tt.icon} alt={tt.label} width={16} height={16}/>}
                                {tt.label}
                            </span>)}
                        </span>
                        <span>{li.lines}</span>
                    </p>
                </li>)}
            </ul>
        </div>
    )
}

export default TopList