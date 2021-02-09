function Navbar(props){
    return(
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={props.target} aria-expanded="true" aria-controls={props.className}>
                <i className={props.icon}></i>
                <span>{props.topic}</span>
            </a>
            <div id={props.id} className="collapse" aria-labelledby={props.label} data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    {props.children}
                </div>
            </div>
        </li>
    )
}
export default Navbar;