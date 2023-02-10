import HandButton from "./HandButton";
import HandIcon from "./HandIcon";

const handleClick = (value)=>console.log(value);

function App(){
    return <div>
        <HandButton value="rock" onClick={handleClick}/>
        <HandButton value="scissor" onClick={handleClick}/>
        <HandButton value="paper" onClick={handleClick}/>
    </div>
}

export default App;