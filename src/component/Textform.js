import React, {useState} from 'react'

export default function Textform(props) {

    // Click EventListener For upperCase start.
  const handleUpperCase = () => {
    console.log("Clicked on UpperCase");
    let newText = text.toUpperCase();
    textChange(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  // Click EventListener For upperCase End.

  // Click EventListener For lowerCase start.
  const handleLowerCase = () => {
    console.log("clicked on lowerCase");
    let newtext = text.toLowerCase();
    textChange(newtext);
    props.showAlert("Converted to LowerCase!", "success");
  };
  // Click EventListener For upperCase End.

  const hanleToggleClick = () => {
    console.log("clicked toggle")
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    textChange(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
    props.showAlert("Converted to Para!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    textChange(newText.join(" "))
    props.showAlert("Extra Space has been Removed", "success");

  }

  const handleRemoveText = () => {
    let rText = ""
    textChange(rText)
    props.showAlert("Text has been Removed!", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been coped to your ClipBoard!", "success");

  }


  // OnChange event Start
  const handleChanges = (event) => {

    textChange(event.target.value);
  };
  // OnChange event End

  // Usestate
  const [text, textChange] = useState("");

  return (
   <>
      {/* Textarea start */}
      <div>
        <div className="mb-3 mt-5 ">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202124', color: props.mode === 'light' ? 'black' : 'white' }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChanges}
          ></textarea>

          <button
            className="btn btn-outline-info btn-sm mt-2"
            onClick={handleUpperCase}
          >
            Convert to UpperCase
          </button>

          <button
            className="btn btn-outline-info btn-sm mt-2 mx-2"
            onClick={handleLowerCase}
          >
            Convert to LowerCase
          </button>

          <button className="btn btn-outline-info btn-sm mt-2 mx-2" onClick={hanleToggleClick}>Convert to Para</button>
          <button className="btn btn-outline-info btn-sm mt-2 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
          <button className="btn btn-outline-info btn-sm mt-2 mx-2" onClick={handleRemoveText}>Remove Text</button>
          <button className="btn btn-outline-info btn-sm mt-2 mx-2" onClick={handleCopy}>Copy to Clipboard</button>

        </div>
      </div>
      {/* Textarea End */}

      {/* WordCounter start */}
      <div className="containers mt-4">
        <div className="wordcounter">
          <h2>Enter Counter</h2>
          <div className="border d-flex flex-column p-2">
            <div>No. of Words: {text.split(" ").length}</div>
            <div>No. of Characters: {text.length}</div>
          </div>
        </div>

        {/* Preview start */}
        <div className="preview mt-3 mb-3">
          <h2>Preview</h2>
          <div className="border">{text.length > 0 ? text : 'Enter something in texbox to preview'}</div>
        </div>
        {/* WordCounter End */}
      </div>
      {/* WordCounter End */}
    </>
  )
}
