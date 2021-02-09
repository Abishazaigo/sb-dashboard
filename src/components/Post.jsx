function Post(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className={props.className}>
                <div className="card-body">{props.background}
                    <div className={props.text}>{props.color}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;