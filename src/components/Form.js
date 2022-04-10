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

    const handleExtraSpaces = () => {

        let newText = userText.split(/[ ]+/);
        setUserText(newText.join(' '));
    }

    const handleClear = () => {
        setUserText('');
    }

    const handleNumbers = () => {

        var numbers = userText.match(/\d/g);
        numbers = numbers.join("");
        console.log(numbers);
    }

    
    const handleTextOnChange = (event) => {
        setUserText(event.target.value);
    }

    const [userText, setUserText] = useState('');

  return (
      <>
      <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className='text-center'>{props.heading}</h1>
        <div className="form-group">
            <textarea name="userText" id="userText" value={userText} onChange={handleTextOnChange} style={{backgroundColor: props.mode === 'dark' ? '#858585' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} cols="30" rows="10" className="form-control"></textarea>
        </div>

        {/* #858585 */}

        <button className="btn btn-primary" onClick={handleUpperClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleNumbers}>Extract Numbers</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      </div>

      <div className="container my-2">
          <h2>Text Summary</h2>
          <p>{userText.split(' ').length} words and {userText.length} character</p>
          <p>{0.08 * userText.split(' ').length} minutes read</p>

          <h3>Preview</h3>
          <p>{userText === '' ? 'Enter something in text box to preview it here' : userText}</p>
      </div>

      </>
  );
}
