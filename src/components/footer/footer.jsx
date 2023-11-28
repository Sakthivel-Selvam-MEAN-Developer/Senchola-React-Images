import './footer.css'

const Footer = () => {
    return (
        <div className="footer bg-black" id='contact '>
            <footer className='d-flex justify-content-around align-items-center flex-wrap'>
                <h4 className='text-white'>MCU</h4>
                <div className="navbar nav-light ms-2 me-2">
                    <ul className="navbar-nav navbar-dark me-auto ms-auto me-5 mb-2 mb-lg-0 d-flex justify-content-center flex-row flex-wrap bg-transparent">
                        <li className="nav-item">
                            <a className="nav-link ms-2 me-2" aria-current="page" href="#adventures">Adventures</a>
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
                <a href="mailto:sakthiselvamcs@gmail.com" className='btn btn-primary ms-2 me-2'>Mail Me</a>
            </footer>
        </div>
    )
}

export { Footer }