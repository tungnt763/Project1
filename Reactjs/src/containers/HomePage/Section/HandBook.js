import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";

class HandBook extends Component {

    render() {
        return ( 
            <div className="section-share section-handbook">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Cẩm nang</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Top 6 địa chỉ xía xăm uy tín tại TPHCM</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Chi tiết các gói xét nghiệm NIPT tại Medlatec</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Top 6 địa chỉ trị thâm mắt uy tín tại TPHCM</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Bắn laser trị nám ở đâu TPHCM uy tín?</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Trẻ hóa bàn tay giá bao nhiêu tại Hà Nội</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Xét nghiệm NIPT 3 cặp nhiễm sắc thể là gì? Chi phí bao nhiêu</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);