import "assets/css/layout.css"
import "assets/css/navBar/navBarContainer.css"
import SearchBar from "./searchBar"

const Navbar = ( props ) => { 
    return (
        <div className="navbar-layout">
            <div className="navBarContainer">
                <SearchBar />
                
                <div style={{ "width": "50%", textAlign: "right" }} > {/* temporary */}
                    logout
                </div>
            </div>
        </div>
    )
}

export default Navbar