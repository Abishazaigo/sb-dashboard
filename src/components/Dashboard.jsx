import Navbar from '../components/Navbar';
import Interface from './Interface';
import Dropdown from './Dropdown';
import Card from './Card';
import Post from './Post';
import Notification from './Notification';
import Header from './Header';
import Footer from './Footer';
function Dashboard(){
    return(
        <div className="sidebar-toggled" id="page-top">
            <div className="wrapper" id="wrapper">
                <Header />  
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                <span className="badge badge-danger badge-counter">3+</span>
                            </a>
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>
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
                                <h6 className="dropdown-header">
                                    Message Center
                                </h6>
                                <Notification src="img/undraw_profile_1.svg" className="status-indicator bg-success" content="Hi there! I am wondering if you can help me with problem I've been having" name="Emily Fowler · 58m" />
                                <Notification src="img/undraw_profile_2.svg" className="status-indicator" content="I have the photos that you ordered last month, how would you like them sent to you?" name="Jae Chun · 1d" />
                                <Notification src="img/undraw_profile_3.svg" className="status-indicator bg-warning" content="Last month's report looks great, I am very happy with the progress so far, keep up the good work!" name="Morgan Alvarez · 2d" />
                                <Notification src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" className="status-indicator bg-success" content="Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..." name="Chicken the Dog · 2w" />
                                <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>
                    <div className="topbar-divider d-none d-sm-block"></div>
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                <Interface className="dropdown-item" href="#" icon="fas fa-user fa-sm fa-fw mr-2 text-gray-400" label="Profile" />
                                <Interface className="dropdown-item" href="#" icon="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" label="Settings" />
                                <Interface className="dropdown-item" href="#" icon="fas fa-list fa-sm fa-fw mr-2 text-gray-400" label="Activity Log" />
                                <div className="dropdown-divider"></div>
                                <Interface className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" icon="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" label="Logout" />
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">
                        <Card className="card border-left-primary shadow h-100 py-2" colorName="text-xs font-weight-bold text-primary text-uppercase mb-1" label="Earnings (Monthly)" cost="$40,000" icon="fas fa-calendar fa-2x text-gray-300" />
                        <Card className="card border-left-success shadow h-100 py-2" colorName="text-xs font-weight-bold text-success text-uppercase mb-1" label="Earnings (Annual)" cost="$215,000" icon="fas fa-dollar-sign fa-2x text-gray-300" />
                        <Card className="card border-left-info shadow h-100 py-2" colorName="text-xs font-weight-bold text-info text-uppercase mb-1" label="Tasks" cost="50%" icon="fas fa-clipboard-list fa-2x text-gray-300" />
                        <Card className="card border-left-warning shadow h-100 py-2" colorName="text-xs font-weight-bold text-warning text-uppercase mb-1" label="Pending Requests" cost="18" icon="fas fa-comments fa-2x text-gray-300"/>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="row">
                                <Post className="card bg-primary text-white shadow" background="Primary" text="text-white-50 small" color="#4e73df" />
                                <Post className="card bg-success text-white shadow" background="Success" text="text-white-50 small" color="#1cc88a" />
                                <Post className="card bg-info text-white shadow" background="Info" text="text-white-50 small" color="#36b9cc" />
                                <Post className="card bg-warning text-white shadow" background="Warning" text="text-white-50 small" color="#f6c23e" />
                                <Post className="card bg-danger text-white shadow" background="Danger" text="text-white-50 small" color="#e74a3b" />
                                <Post className="card bg-secondary text-white shadow" background="Secondary" text="text-white-50 small" color="#858796" />
                                <Post className="card bg-light text-black shadow" background="Light" text="text-black-50 small" color="#f8f9fc" />
                                <Post className="card bg-dark text-white shadow" background="Dark" text="text-white-50 small" color="#5a5c69" />
                            </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    </div>
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>
    <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}
export default Dashboard;