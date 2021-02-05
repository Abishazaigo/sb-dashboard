function Button(props){
    return(
        <button className={props.className}>
            <i className={props.icon}></i> {props.label}
        </button>
    )
}
export default Button;