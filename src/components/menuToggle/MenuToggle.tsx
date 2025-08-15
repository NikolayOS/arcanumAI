import style from './MenuToggle.module.css';
import burger from '../../assets/burger.svg';
import close from '../../assets/close.svg';


interface MenuToggleProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const MenuToggle = (props: MenuToggleProps) => {


  return (
	<div className="MenuToggle" onClick={props.toggleMenu}>
		{props.isMenuOpen ? <img src={close} alt="close"  className={style.menu}/>  :  <img src={burger} alt="burger"  className={style.menu}/> }
    </div>
  );
};

export default MenuToggle;