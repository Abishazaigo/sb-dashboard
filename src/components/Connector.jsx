function Connector(props){
    return(
        <a className={props.className} data-toggle={props.data} data-target={props.target}>
            <i className={props.icon}></i>
        {props.label}</a>
    )
}
export default Connector;