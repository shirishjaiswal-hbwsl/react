import { useState } from "react";
import "./NewModelForm.css";
function NewModelForm (props) {

    return (
        <div className="new-model-form">
            <h1>New Model Form</h1>
            <form >
                <label className="label" htmlFor="title">Title</label>
                <input className="input" type="text" name="title" id="title" onChange={props.onTitleChange}/>
                <label className="label" htmlFor="subtitle">Subtitle</label>
                <input className="input"  type="text" name="subtitle" id="subtitle" onChange={props.onSubtitleChange} />
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewModelForm;