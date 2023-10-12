import Card from "./Card";
import Qeue from "./Qeue";


const arr=[
    {image:"card1.jpeg", name: "Gully Boy", date:"7-Aug-2017"},
    {image:"card1.jpeg",name: "Lover", date:"7-Aug-2017"},
    {image:"card1.jpeg",name: "Calm down", date:"7-Aug-2017"},
    {image:"card1.jpeg",name: "faded", date:"7-Aug-2017"}
]
 const qeue=[
    {list:"1",image:"card1.jpeg", name:"lover", icon:"heart"},
    {list:"1",image:"card1.jpeg", name:"lover", icon:"heart"},
    {list:"1",image:"card1.jpeg", name:"lover", icon:"heart"},
    {list:"1",image:"card1.jpeg", name:"lover", icon:"heart"},
    {list:"1",image:"card1.jpeg", name:"lover", icon:"heart"}

 ]

function Main(){
    return(

        <div>
            <h1>Welcome to Music Player</h1>
            <div className="conatiner">
                <div className="row">
                    {
                        arr.map((x,i)=>(
                            <Card {...x}/>
                        ))
                    }
                </div>
                <div className="sidebar">
                    {
                        qeue.map((x,i)=>(
                            <Qeue{...x}/>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Main;