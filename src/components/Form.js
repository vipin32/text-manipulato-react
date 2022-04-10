import React, {useState} from 'react';

export default function Form(props) {

    const handleUpperClick = () => {

        let newText = userText.toUpperCase();
        setUserText(newText);
    }

    const handleLowerClick = () => {
        let newText = userText.toLowerCase();
        setUserText(newText);
    }

    

    const handleTextOnChange = (event) => {
        setUserText(event.target.value);
    }

    const [userText, setUserText] = useState('');


  return (
      <>
      <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea name="userText" id="userText" value={userText} onChange={handleTextOnChange} cols="30" rows="10" className="form-control"></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpperClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Uppercase</button>
      </div>

      <div className="container my-2">
          <h2>Text Summary</h2>
          <p>{userText.split(' ').length} words and {userText.length} character</p>
          <p>{0.08 * userText.split(' ').length} minutes read</p>

          <h3>Preview</h3>
          <p>{userText}</p>
      </div>

      </>
  );
}
