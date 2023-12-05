import React, {useState} from "react";

export default function TextForm(props) {
    const handleonclicku= ()=>{
        console.log(text);
        let t=text.toUpperCase()
        setText(t)
        props.showAlert("converted to uppercase","success")
    }
    const handleonclickl= ()=>{
        console.log(text);
        let t=text.toLowerCase()
        setText(t)
        props.showAlert("converted to lowercase","success")
    }
    const handleonchange= (event)=>{
        console.log("change");
        setText(event.target.value)
    }
    const handleclear= (event)=>{
     // console.log("change");
      setText(" ")
      props.showAlert("clear Text","success")
  }
  const handleSpace= ( event)=>{
    // console.log("change");
   // const textWithSpace = " "; // Set the text variable to a single space character
    const spacesCount = text.split(' ').length - 1;
    setSpacesCount(spacesCount)
 }
    const [text, setText] = useState("Enter the text here");
    const [spacesCount, setSpacesCount] = useState(0);
  return (
    <> 
     <h1  style={{color: props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
    <div className="container my-4 "  style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
      <textarea
        className="form-control " id="myform" rows="10" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#6c757d':'white'}}></textarea>
      <button className="btn  my-2 mx-2"  style={{backgroundColor: props.mode1==='light'?'blue':'green'}} onClick={handleonclicku}>convert to uppercase </button>
      <button className="btn  my-2 mx-2" style={{backgroundColor: props.mode1==='light'?'blue':'green'}} onClick={handleonclickl}>convert to lowercase </button>
      <button className="btn  my-2 mx-2"style={{backgroundColor: props.mode1==='light'?'blue':'green'}}  onClick={handleclear}>clear text </button>
      <button className="btn  my-2 mx-2"  style={{backgroundColor: props.mode1==='light'?'blue':'green'}}onClick={handleSpace}>space Count </button>
    </div>
    
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p> {text.trim().length} words and {text.length} character</p>
      <p> {0.008* text.trim().length} minutes read</p>
      <p> {spacesCount} Spaces</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  
  );
}
