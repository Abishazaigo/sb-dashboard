import {Link} from 'react-router-dom';

import Menu from './Menu';
import Dropdown from './Dropdown';
import Notification from './Notification';

import Profile from '../images/undraw_profile.svg';
import Profile1 from '../images/undraw_profile_1.svg';
import Profile2 from '../images/undraw_profile_2.svg';
import Profile3 from '../images/undraw_profile_3.svg';
import Profile4 from '../images/undraw_profile_4.jpg';

function Dashboard(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">Alerts Center</h6>
                    <Dropdown className="icon-circle bg-primary" icon="fas fa-file-alt text-white" label="December 12, 2019" content="A new monthly report is ready to download!" />
                    <Dropdown className="icon-circle bg-success" icon="fas fa-donate text-white" label="December 7, 2019" content="$290.29 has been deposited into your account!" />
                    <Dropdown className="icon-circle bg-warning" icon="fas fa-exclamation-triangle text-white" label="December 2, 2019" content="Spending Alert: We've noticed unusually high spending for your account." />
                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">Message Center</h6>
                            <Notification src={Profile1} className="status-indicator bg-success" content="Hi there! I am wondering if you can help me with problem I've been having" name="Emily Fowler · 58m" />
                            <Notification src={Profile2} className="status-indicator" content="I have the photos that you ordered last month, how would you like them sent to you?" name="Jae Chun · 1d" />
                            <Notification src={Profile3} className="status-indicator bg-warning" content="Last month's report looks great, I am very happy with the progress so far, keep up the good work!" name="Morgan Alvarez · 2d" />
                            <Notification src={Profile4} className="status-indicator bg-success" content="Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..." name="Chicken the Dog · 2w" />
                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                    </div>
                </li>
                <div className="topbar-divider d-none d-sm-block">
                </div>
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                        <img className="img-profile rounded-circle" src={Profile} />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <Menu className="dropdown-item" icon="fas fa-user fa-sm fa-fw mr-2 text-gray-400" label="Profile" />
                        <Menu className="dropdown-item" icon="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" label="Settings" />
                        <Menu className="dropdown-item" icon="fas fa-list fa-sm fa-fw mr-2 text-gray-400" label="Activity Log" />
                        <div className="dropdown-divider"></div>
                        <Link to="/">
                        <Menu className="dropdown-item" data-toggle="modal" data-target="#logoutModal" icon="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" label="Logout" />
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
                
    )
}
export default Dashboard;