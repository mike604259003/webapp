import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <section id="home" className="home bg-black fix">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="main_home text-center">
                                <div className="col-md-12">
                                    <div className="hello">
                                        <div className="slid_item">
                                            <div className="home_text ">
                                                <h1 className="text-yellow">Welcome to Laws</h1>
                                                <h3 className="text-white text-uppercase">Information Technology.</h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <a className="mouse-scroll" href="#about">
                                <span className="mouse">
                                    <span className="mouse-movement"></span>
                                </span>
                                <span className="mouse-message fadeIn">Explore</span> <br />

                            </a>

                        </div>
                    </div>
                </section>



                <section id="about" className="about bg-yellow roomy-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main_about text-center">
                                    <h1 className="text-black">Ethics and Information Technology Laws.</h1>
                                    <h2 className="text-white"> ↧ </h2>

                                </div>
                                <h5>Ethics : </h5>
                                <p className="font-thai">จริยธรรมมาจากคำว่า จริย กับ ธรรมะ จริย หมายถึง ความประพฤติ กิริยาที่ควรประพฤติ ธรรมะหมายถึง คุณความดี คำสั่งสอนในศาสนา หลักประพฤติปฏิบัติในศาสนา ความจริง ความยุติธรรม ความถูกต้อง กฎเกณฑ์ กฎหมาย สิ่งของทั้งหลาย เมื่อพิจารณาตามรูปคำจากพจนานุกรมฉบับราชบัณฑิตยสถาน พ.ศ. ๒๕๓๕ ให้คำนิยามว่า “จริยธรรม” คือ ธรรมที่เป็น ข้อประพฤติปฏิบัติ ศีลธรรม กฎศีลธรรม</p>
                                <h5>Law : </h5>
                                <p className="font-thai">กฎที่สถาบัน หรือผู้มีอำนาจสูงสุดในรัฐตราขึ้น หรือที่เกิดขึ้นจากจารีตประเพณีอันเป็นที่ยอมรับนับถือ เพื่อใช้ในการบริหารประเทศ เพื่อใช้บังคับบุคคลให้ปฏิบัติตาม หรือเพื่อกำหนดระเบียบแห่งความสัมพันธ์ระหว่างบุคคล หรือระหว่างบุคคลกับรัฐ.</p>
                                <div className="main_about text-center">
                                    <a href="#/laws-content" className="btn btn-primary m-top-100">Next</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}