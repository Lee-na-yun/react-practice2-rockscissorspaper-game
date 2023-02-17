import HandIcon from "./HandIcon";
import purpleImg from "./assets/purple.svg";

const handStyle = {
    width: '166px',
    height: '166px',
    border:'none',
    outline:'none',
    textAlign:'center',
    cursor:'pointer',
    backgroundColor:'transparent',
    backgroundImage:`url(${purpleImg})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'contain',
};

function HandButton({value, onClick}) {
    const handleClick = ()=>onClick(value);
    return (
        <button style={handStyle} onClick={handleClick}>
            <HandIcon value={value}/>
        </button>
    );
}

export default HandButton;