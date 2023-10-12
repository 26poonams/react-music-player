const Queue = (props)=>{
    return(
        <div className="col-md-9 row-md-2">
            <span>{props.list}</span>
            <img src={require("./image/"+props.image)} />
            <span>{props.name}</span>
            <span>{props.icon}</span>
        </div>
    )
}

export default Queue;