function Label(props){
    return(
        <div>
            <a className={props.className} href={props.link}>{props.name}</a>
        </div>
    )
}
export default Label;