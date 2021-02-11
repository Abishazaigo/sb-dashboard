import {Link} from 'react-router-dom';
import {Animated} from 'react-animated-css'; 

function ErrorPage(){
    return(
        <div className="container-fluid">
            <div className="text-center glitch">
                <Animated animationIn="shake" animationInDuration="1000" isVisible={true}>
                    <div className="error mx-auto" data-text="400">"404"
                    </div>
                </Animated>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                <Link to="/homepage">
                    <a>← Back to Dashboard</a>
                </Link>
            </div>
        </div>                           
    )
}
export default ErrorPage;