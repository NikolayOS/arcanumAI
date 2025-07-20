import { useEffect, useState } from 'react';
import style from './ResponseField.module.css';

interface ResponseFieldProps {
  response: string;
}

const ResponseField = (props : ResponseFieldProps) => {
  const [response, setResponse] = useState(props.response);


  useEffect(() => {
    setResponse(props.response);
  }, [props.response]);

  return (
        <textarea className={style.main} value={response} readOnly />
  )
}

export default ResponseField;