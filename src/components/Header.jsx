import {useState, useEffect} from 'react';

import Sidebar from './Sidebar';

function useWindowSize(){
    const[size, setSize]=useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
    }, []);
    return size;
}
function Header(){
    const[height, width]=useWindowSize();
    const[showMenu, setShowMenu]=useState(false);
    return(
        <>
        {width>768  && <Sidebar />}
        {width<768 && showMenu && <Sidebar />}
        <div className="row">
            <div className="col-12">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={ () => setShowMenu(!showMenu)}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>
        </div>        
        </>
    )
}
export default Header;