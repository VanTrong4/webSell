function LeftAccount(){
    return(
        <div className="col-sm-3">
                    <div className="left-sidebar">
                        <h2>Account</h2>
                        <div className="panel-group category-products" id="accordian">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                        <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                        Account
                                    </a>
                                    </h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordian" href="/my_product">
                                            <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                            My Products
                                        </a>
                                        </h4>
                                    </div>
                            </div>
                            <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordian" href="/create_product">
                                            <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                            Create Product
                                        </a>
                                        </h4>
                                    </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default LeftAccount;