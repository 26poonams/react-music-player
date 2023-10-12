const Card = (props)=>{
    return(

        <div className="col-md-3 col-md-6">
            <img src={require("./image/"+props.image)} />
            <span>{props.name}</span>
            <span>{props.date}</span>
           
        </div>
    )
}

export default Card;