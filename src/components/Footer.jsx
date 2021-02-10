function Footer(){
    let date=new Date();
    let year=date.getFullYear();
    return(
        <div className="footer-position">
            <div className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span className="bottom">Copyright © Your Website {year} 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;