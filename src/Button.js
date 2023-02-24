import "./Button.css";

function Button({children, onClick}) {
    return <button className="reset-btn" onClick={onClick}>{children}</button>
}

export default Button;