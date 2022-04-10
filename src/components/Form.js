import React, {useState} from 'react';

export default function Form(props) {

    const handleUpClick = () => {

        let newText = userText.toUpperCase();

        setUserText(newText);
        // console.log(newText);


    }

    const handleTextOnChange = (event) => {
        setUserText(event.target.value);
        // console.log(userText);
    }

    const [userText, setUserText] = useState('Enter Any Text');


  return (
      <>
      <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea name="userText" id="userText" value={userText} onChange={handleTextOnChange} cols="30" rows="10" className="form-control"></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
      </div>

      </>
  );
}
