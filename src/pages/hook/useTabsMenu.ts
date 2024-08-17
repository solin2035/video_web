const useTabsMenu = () => {
    const tabs = [
        {
            id: 1,
            name: '首页',
            path: '/mobile'
        },
        {
            id: 2,
            name: '电影',
            path: '/mobile/dy'
        },
        {
            id: 3,
            name: '电视剧',
            path: '/mobile/dsj'
        },
        {
            id: 4,
            name: '综艺',
            path: '/mobile/zy'
        }
    ]

    const goToPath = (path: string) => {
        window.location.href = path
    }

    const isActive = (path: string) => {
        console.log(window.location.pathname, path)
        return window.location.pathname === path
    }

    return {
        tabs,
        goToPath,
        isActive
    }
}

export default useTabsMenu