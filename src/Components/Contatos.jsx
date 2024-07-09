export const Contact = (props) => {
    return (
        <div>
           <div id="contact">
            <div className="container">
                <div className="col-md-8">
                    <div className="row">
                        <div className="section-tile">
                            <h2>Get In Touch</h2>
                            <p>
                                Please fill out the form below to send us an email and we will
                                get back to you as soon as possible.
                            </p>
                        </div>
                        <form name="sentMessage" validate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-custom btn-lg">
                                Mensagens
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-3 col-md-offset-1 contact-info">
                    <div className="contact-tem">
                        <h3>Infomações Contatos</h3>
                        <p>
                            <span>
                                <i className="fa fa-map-marker"></i> Numero
                            </span>
                        </p>
                    </div>
                    <div className="contact-item">
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}