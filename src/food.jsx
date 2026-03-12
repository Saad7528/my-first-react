export default function Food({food, isDone, time=0}){

    
    if(isDone){
       return <li>I eat - {food} {isDone} in {time}</li>
    }
    return <li>Eat {food} and rest {time}</li>
    // return(
    //     <ol>
    //         <li>{food} {isDone}</li>
    //     </ol>
    // )
}