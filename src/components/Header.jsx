import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Connector from './Connector';
import Gallery from './Gallery';
import Button from './Button';
function Header(){
    return(
        <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled " id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin</div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider" />
                    <div className="sidebar-heading">
                        Interface
                    </div>
                    <Navbar icon="fas fa-fw fa-cog" topic="Components" id="collapseTwo" className="collapseTwo" label="collapseTwo" target="#collapseTwo">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Connector className="collapse-item" link="buttons.html" label="Buttons" />
                        <Link to="/posts">
                        <Connector className="collapse-item" link="cards.html" label="Cards" />
                        </Link>
                    </Navbar> 
                    <Navbar icon="fas fa-fw fa-wrench" topic="Utilities" id="collapseUtilities" className="collapseUtilities" label="collapseUtilities" target="#collapseUtilities">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Connector className="collapse-item" link="utilities-color.html" label="Colors" />
                        <Connector className="collapse-item" link="utilities-border.html" label="Borders" />
                        <Connector className="collapse-item" link="utilities-animation.html" label="Animations" />
                        <Connector className="collapse-item" link="utilities-other.html" label="Other" />
                    </Navbar>
                    <div className="sidebar-heading">
                        Addons
                    </div>
                    <Navbar icon="fas fa-fw fa-folder" topic="Pages" id="collapsePages" className="collapsePages" label="collapsePages" target="#collapsePages">
                        <h6 className="collapse-header">Login screens:</h6>
                        <Link to="/register">
                        <Connector className="collapse-item" link="register.html" label="Register" />
                        </Link>
                        <Connector className="collapse-item" link="forgot-password.html" label="Forgot Password" />
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <Connector className="collapse-item" link="404.html" label="404 Page" />
                        <Connector className="collapse-item" link="blank.html" label="Blank Page" />
                    </Navbar>
                    <hr className="sidebar-divider d-none d-md-block" /> 
                    <div className="text-center d-none d-md-inline">
                        <Button className="rounded-circle border-0" id="sidebarToggle" />
                    </div>
                    <div className="sidebar-card">
                        <Gallery className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="" />
                        <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                        <Connector className="btn btn-success btn-sm" link="https://startbootstrap.com/theme/sb-admin-pro" label="Upgrade to Pro!" />
                    </div>
            </ul>
            </>
    )
}
export default Header;