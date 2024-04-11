import './BackModel.css';
function BackModel (props) {
    return (
        <>
            <div className="backdrop"/>
            <dialog open >{props.children}</dialog>
        </>
    )
}

export default BackModel;