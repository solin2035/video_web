import { useRouter } from 'next/router';
const  useGoLink = () => {
    const router = useRouter();
    const goLink = (url?:string )=>{
         const isMobile = router.pathname.startsWith('/mobile')
        const isTablet = router.pathname.startsWith('/tablet')
        const isPc = router.pathname.startsWith('/pc')
        const platformUrl = isMobile? `/mobile` : isTablet? '/tablet' : '/pc'
        if(!url) {
            router.push(`${platformUrl}`);
            return 
        }
        router.push(`${platformUrl}/search${url}`);
    }
    return {
        goLink
    }
   
}
export default useGoLink