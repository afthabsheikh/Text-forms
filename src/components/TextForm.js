import React, {useState} from "react";

export default function TextForm(props) {
    
    const handleOnChange= (event) => {
        setText(event.target.value)
    }

    const handleUppercaseClick= () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase','success')
    }

    const handleLowercaseClick= () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase','success')
    }

    const handleClearText= () => {
        let newText = '';
        setText(newText)
        props.showAlert('Textbox cleared','success')
    }

    const handleCopy = () =>{
        let copyText = document.getElementById('mybox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
        props.showAlert('Text copied','success')
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Extraspaces removed','success')
    }
    
    // const[wordCount,setWordCount]=useState(null)

    // const handleWordCount = (words)=>{
    //     words=text.split("").length;
    //     if(text===' '){
    //         setWordCount(null)
    //     }else{
    //         setWordCount(words)
    //     }
    // }

    const[text,setText] = useState('Enter text here');
    //setText("new text");
    return(
        <>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="mybox" className="form-label"></label>
            <textarea type="text" className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder="This is example text"/>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUppercaseClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowercaseClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear textbox</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
        </div>
        <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>Your text here</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:'Enter something in textbox above to preview'}</p>
        </div>
        </>
    );
}