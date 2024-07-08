export const Abount = (props) => {
    return (
        <div id="abount">
            <div className="container">
                <div className="row">
                    <div>
                        {" "}
                        <img src=""  className="" alt=""/>
                    </div>
                    <div className>
                        <div className="about-text">
                            <h2>About</h2>
                            <p>{props.data? props.data.paragraph : "loading..."}{ ""}
                                <h3>Quem somos ?</h3>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <ul>
                                            {props.data
                                             ? props.data.Why.map((d,i)=>(
                                                <li key={`${d}-$(i)`}>{d}</li>
                                             ))
                                            : "loading"}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <ul>
                                            {props.data
                                             ? props.data.Why2.map((d, i) =>(
                                                <li key={`${d} -${i}`}>{d}</li>
                                             ))
                                            : "loading"}
                                        </ul>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}