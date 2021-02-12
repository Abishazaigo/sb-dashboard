import {Link} from 'react-router-dom';

import Navbar from './Navbar';
import Menu from './Menu';
import Gallery from './Gallery';
import Button from './Button';

import Pro from '../images/undraw_rocket.svg';

function Sidebar(){
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" >
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">SB Admin
                            </div>
                        </a>
                        <hr className="sidebar-divider my-0" />
                        <li className="nav-item active">
                            <a className="nav-link">
                            <Link to="/homepage">
                            <span className="dashboard">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                    Dashboard</span>
                                </Link>
                            </a>
                        </li>
                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            Interface
                        </div>
                        <Navbar icon="fas fa-fw fa-cog" topic="Components" id="collapseTwo" className="collapseTwo" label="collapseTwo" target="#collapseTwo">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <Link to="/posts">
                            <Menu className="collapse-item" label="Posts" />
                            </Link>
                        </Navbar> 
                        <div className="sidebar-heading">
                            Addons
                        </div>
                        <Navbar icon="fas fa-fw fa-folder" topic="Pages" id="collapsePages" className="collapsePages" label="collapsePages" target="#collapsePages">
                            <h6 className="collapse-header">Contacts:</h6>
                            <Link to="/email">
                            <Menu className="collapse-item" label="Email" />
                            </Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link to="/error">
                            <Menu className="collapse-item" link="404.html" label="404 Page" />
                            </Link>
                        </Navbar>
                        <hr className="sidebar-divider d-none d-md-block" /> 
                        <div className="text-center d-none d-md-inline">
                            <Button className="rounded-circle border-0" id="sidebarToggle" />
                        </div>
                        <div className="sidebar-card">
                            <Gallery className="sidebar-card-illustration mb-2" src={Pro} alt="" />
                            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                            <Menu className="btn btn-success btn-sm"  label="Upgrade to Pro!" />
                        </div>
                    </ul>
    )
}
export default Sidebar;