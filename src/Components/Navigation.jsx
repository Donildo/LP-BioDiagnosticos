export const Navigation= (props) => {
    return(
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                     type="button"
                     className="navbar-toggle collaspe-1"
                     data-toggle = "collapse"
                     data-target="#bs-example-navbar-collaspe-1"
                    >
                        {""}
                        <span className="sr-only">Toggle navigation</span>{""}
                        <span className="icon-bar"></span>{""}
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <a className="navbar-brand page-scroll" href="#page-top">
                        React Landing page
                    </a> {" "}
                </div>


                <div
                 className="collapse navbar-collapse"
                 id="bs-example-navbar-collapse-1"
                >
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#features" className="page-scroll">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="abount" className="page-scroll">
                                Abount
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="page-scroll">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="page-scroll">
                                Galleria
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="page-scroll">
                                Depoimento
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="page-scroll">
                                Medicos
                            </a>
                        </li>
                        <li>
                            <a href="#contact"className="page-scroll">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}