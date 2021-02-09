function Interface(props){
    return(
        <a className={props.className} href={props.link} data-toggle={props.data} data-target={props.target}>
            <i className={props.icon}></i>
        {props.label}</a>
    )
}
export default Interface;