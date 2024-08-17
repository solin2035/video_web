import usePlayer from "../hook/usePlayer"

const Player = () => {
    const {
        play,
        pause,
        next,
        prev
    } = usePlayer()

    return (
        <div>
            player
        </div>
    )
}
export default Player