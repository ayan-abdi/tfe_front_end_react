import forum from './forum.jpg';
import style from './home.module.css';

const HomePage = () => {
    return (<>
        <h1>Mon blog</h1>
        <p>Organize your Life to be better ♥</p>
        <div className={style.forumImage}>
            <img src={forum} alt='forum' />
        </div>
    </>);
};

export default HomePage;