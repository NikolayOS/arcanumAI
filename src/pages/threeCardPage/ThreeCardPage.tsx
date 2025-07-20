import React, { useState } from 'react';
import axios from 'axios';
import style from  './ThreeCardPage.module.css';
import Card from '../../components/cardComponent/Card';
import ResponseField from '../../components/responseField/ResponseField';



const ThreeCardPage: React.FC = () => {
	const [disablParam, setDisablParam] = useState(false);
    const [question, setQuestion] = useState("");
	const [resault, setResault] = useState("");
	const [threeCards, setThreeCards] = useState([{id: 1, name: "", description: "", img: ""}, {id: 2, name: "", description: "", img: ""}, {id: 3, name: "", description: "", img: ""}]);

	function questionFunction(event: React.ChangeEvent<HTMLInputElement>) {
		setQuestion(event.target.value)
	}

	function shuffled () {
		setDisablParam(!disablParam);
		fetchData();
	}
		const fetchData = async () => {
			try {
				const res = await axios.post('http://localhost:3000', {
					question: question,
				});
				setThreeCards(res.data.threeCards);
				setResault(res.data.message.content);
				console.log(res.data);
			} catch (err) {
				console.error(err);
			}
		};
  return (
	<div className={style.main}>
				<input type="text" className={style.questionField} placeholder='Ask your question' value={question} onChange={questionFunction}/>
				<button className={style.button} onClick={() => shuffled()} disabled={disablParam ? true : false}>Start</button>
				<div className={style.cardsList}>
				{threeCards.map((card) => (<Card key={card.id} title={card.name} img = {card.img}/>))}
				</div>
				<ResponseField response = {resault}/>
	</div>
  );
};

export default ThreeCardPage;