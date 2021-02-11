function Notification(props){
    return(
        <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={props.src} alt="" />
                <div className={props.className}>
                </div>
            </div>
            <div className="text-truncate">{props.content}
            </div>
            <div className="small text-gray-500">{props.name}
            </div>
        </a>
    )
}
export default Notification;