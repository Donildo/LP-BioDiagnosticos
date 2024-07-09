export const Testimonial = (props) => {
    return(
        <div id="testimonial">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Clientes</h2>
                </div>
                <div className="row">
                    {props.data
                     ? props.data.map((d,i)=>(
                        <div key={`${d.name}-${i}`} className="col-md-4">
                            <div className="testimonial">
                                <div className="testimonial-image">
                                    {" "}
                                    <img src="" alt="" />
                                </div>
                                <div className="testimonial-content">
                                    <p>"{d.text}"</p>
                                    <div className = "testimonial-meta"> -{d.name}</div>
                                </div>
                            </div>
                        </div>
                     ))
                    :"loading"}
                </div>
            </div>
        </div>
    )
}