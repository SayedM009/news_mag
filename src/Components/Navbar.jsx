import { NavLink } from "react-router-dom"

/* eslint-disable react/prop-types */
function Navbar({state, dispatch}) {

    let category;
    // This Codition To Remove Category List From About Page And it Works Because I did not pass the state and dispatch
    if (state) category = state.category
    
    return <nav className="navbar navbar-expand-lg bg-body-tertiary p-3" data-bs-theme="dark" >
    <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-black bg-light px-1 py-1">News Mag</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about-us" className="nav-link">About us</NavLink></li>

                {/* Check if category exsit or not to aviod displaying it on about page */}
                {/* Drowdown menu */}
                {category && <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    {category.slice(0,1).toUpperCase() + category.slice(1)}
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={()=> dispatch({type: "change_category", payload: "general"})}>General</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=> dispatch({type: "change_category", payload: "business"})}>Business</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=> dispatch({type: "change_category", payload: "entertainment"})}>Entertainment</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=> dispatch({type: "change_category", payload: "sports"})}>Sports</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=> dispatch({type: "change_category", payload: "science"})}>Science</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=> dispatch({type: "change_category", payload: "health"})}>Health</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=> dispatch({type: "change_category", payload: "technology"})}>Technology</a></li>
                    </ul>
                </li>}
            </ul>
        </div>
    </div>
</nav>
}

export default Navbar
