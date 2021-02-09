function Dropdown(props){
    return(
        <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
                <div className={props.className}>
                    <i className={props.icon}></i>
                </div>
            </div>
            <div>
                <div className="small text-gray-500">{props.label}
                </div>
                <span className="font-weight-bold">{props.content}</span>
            </div>
        </a>
    )
}
export default Dropdown;