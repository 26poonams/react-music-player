const Card = (props)=>{
    return(
        
        <div className="col-md-6">
            <span>{props.name}</span>
            <span>{props.date}</span>
            <img src={require("./image/"+props.image)} />
        </div>

    )
}

export default Card;