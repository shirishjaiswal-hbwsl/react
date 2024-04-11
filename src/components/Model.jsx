import './Model.css';
function Model ({title, subtitle}) {

    return (
        <div className="card">
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}

export default Model;