import styles from './VideoList.module.css'
import Card from '../Card/index.jsx'

function VideoList({videos ,emptyHeading}) {
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0){
        const noun = count > 1 ? 'Videos' : 'Video';
        heading = `${count} ${noun}`
    }

    return (
        <div>
            <h2>{ heading}</h2>
            <section className={styles.videos}>
                {
                    videos.map((video) => <Card  id={video.id} key = {video.id}/>)
                }
            </section>
        </div>
    );
}
export default VideoList;