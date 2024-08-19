import React from 'react';


export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color : 'white',
    //     backgroundColor : 'black',
    // })

    let myStyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'?'rgba(33,37,41,1)':'white'
    };

    return(
        <>
        <div className="container">
            <h1 style={{color : props.mode === 'dark'?'white':'black'}}>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item"  style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Textutils is a free character counter tool that provides instant character count & word count statics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Text edits</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This text editing utility converts text to uppercase, lowercase, copy text to and removes spaces. Ideal for quick text formatting and cleaning. Efficiently handles these tasks in a simple and user-friendly interface.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Use case</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Preparing content for publishing, coding, or just need quick text adjustments, TextUtils is your go-to tool. Fast, reliable, and easy to use, it enhances productivity by providing essential text manipulation functions in one convenient package.
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}