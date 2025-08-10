import style from './Preloader.module.css';
import preloaderImage from '../../assets/preloader2.gif'; // Adjust the path as necessary


const Preloader = () => {
  return (
	<div className={style.main}>
		<img src={preloaderImage} alt="Loading..."  className={style.preloaderImg}/>
	</div>
  );
};

export default Preloader;