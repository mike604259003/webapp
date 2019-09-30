import React from 'react';

export default class Laws extends React.Component {
    render() {
        return (

            <div>
                <div className="bg-laws"></div>
                <h2 className="font-thai mike">กฎหมายเทคโนโลยีสารสนเทศของประเทศไทย</h2>

                <section id="features" className="features bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="main_features fix roomy-70">

                                <div className="col-md-5">
                                    <div className="features_item">
                                        <div className="head_title">
                                            <h2 className="font-thai">กฏหมายเกี่ยวกับธุรกรรมทางอิเล็กทรอนิกส์</h2>
                                        </div>
                                        <div className="featured_content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec fringilla iaculis facilisis
                                                morbi nulla lectus, luctus interdum eu ultricies ac tortor maecenas nec massa sit
                                            amet erat condimentum porttitor ac quis turpis.</p>

                                            <a href="" className="btn btn-default m-top-40">Download</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-md-offset-1 sm-m-top-50">
                                    <div className="features_item2_area">
                                        <div className="features_item2 text-center">
                                            <div className="divider_horizontal"></div>
                                            <div className="divider_vertical"></div>
                                            <div className="col-xs-6">
                                                <div className="features_item_text">
                                                    <img src="assets/images/featured1.jpg" alt="" className="img-circle" />
                                                    <a href=""><p className="m-top-20 font-thai">ธุรกรรมทางอิเล็กทรอนิกส์</p></a>
                                                </div>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="features_item_text">
                                                    <img src="assets/images/featured2.jpg" alt="" className="img-circle" />
                                                    <a href=""> <p className="m-top-20 font-thai">ลายมือชื่ออิเล็กทรอนิกส์</p></a>
                                                </div>
                                            </div>

                                            <div className="col-xs-6">
                                                <div className="features_item_text m-top-50">
                                                    <img src="assets/images/featured4.jpg" alt="" className="img-circle" />
                                                    <a href=""> <p className="m-top-20 font-thai">ธุรกิจบริการเกี่ยวกับธุรกรรมทางอิเล็กทรอนิกส์</p></a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div >

        )
    }
}