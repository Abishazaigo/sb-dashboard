import Card from './Card';

function Home(){
    return(
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
        </div>
    )
}
export default Home;