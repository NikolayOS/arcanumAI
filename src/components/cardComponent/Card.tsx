import React, { useEffect, useState } from 'react';
import style from './Card.module.css';
import cardBack from '../../assets/card.jpg';

interface CardProps {
  title: string;
  img: string
}

const Card: React.FC<CardProps> = (props) => {
  const [title, setTitle] = useState<string>('');
  const [img, setImg] = useState<string>('');

  useEffect(() => {
    if (props.title) {
      setImg(props.img.toString());
      setTitle(props.title);
    }
  }, [props.title, props.img]);

  return (
	<div className={`${title ? style.rotate : style.card}`} >
    {img ?<img src={`http://localhost:3000/cardes/${img}.jpg`} alt={title}  className={style.img}/> : <img src={cardBack} alt={title}  className={style.img}/>}
    
		</div>
  );
};

export default Card;