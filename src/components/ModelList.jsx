import { useState } from "react";
import Model from "./Model";
import NewModelForm from "./NewModelForm";
import './ModelList.css';
import BackModel from "./BackModel";
function ModelList () {

    const [title, setTitle] = useState('Model 1');
    const [subtitle, setSubtitle] = useState('Subtitle 1');

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const subtitleHandler = (e) => {
        setSubtitle(e.target.value);
    }
    return (
        <>
        <BackModel>
            <NewModelForm onTitleChange={titleHandler} onSubtitleChange={subtitleHandler}/>
        </BackModel>
        <div className="model-list">
            <Model title={title} subtitle={subtitle} />
            <Model title="Model 2" subtitle="Subtitle 2" />
            <Model title="Model 3" subtitle="Subtitle 3" />
        </div>
        </>
    );
}

export default ModelList;