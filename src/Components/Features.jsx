export const Features = (props) => {
    return(
        <div id ="features" className="text-center">
            <div className="container">
                <div className>
                    <h2>Features</h2>
                </div>
                <div className="row">
                    {props.data
                     ? props.data.map((d, i) =>(
                        <div key={`${d.title}-${i}`}>
                            <i className={d.icon}>
                                <h3>{d.title}</h3>
                                <p>{d.text}</p>
                            </i>
                        </div>
                     ))
                    : "Loading..."}
                </div>
            </div>
        </div>
    )
}