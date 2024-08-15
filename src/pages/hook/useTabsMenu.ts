const useTabsMenu = () => {
    const tabs = [
        {
            id: 1,
            name: '首页',
            path: '/'
        },
        {
            id: 2,
            name: '电影',
            path: '/dy'
        },
        {
            id: 3,
            name: '电视剧',
            path: '/dsj'
        },
        {
            id: 4,
            name: '综艺',
            path: '/zy'
        }
    ]

    const goToPath = (path: string) => {
        window.location.href = path
    }

    return {
        tabs,
        goToPath
    }
}

export default useTabsMenu