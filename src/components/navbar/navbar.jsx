import './navbar.css'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">
                        <h4>MCU</h4>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active  ms-2 me-2" aria-current="page" href="#adventures">Adventures</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-2 me-2" aria-current="page" href="#planets">Planets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  ms-2 me-2" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-2 me-2" aria-current="page" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { NavBar }