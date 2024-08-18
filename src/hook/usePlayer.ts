const usePlayer = () => {

    const pause = () => {
        console.log('pause')
    }

    const next = () => {
        console.log('next')
    }

    const prev = () => {
        console.log('prev')
    }

    const play = () => {
        console.log('play')
    }

    return {
        play,
        pause,
        next,
        prev
    }
}

export default usePlayer