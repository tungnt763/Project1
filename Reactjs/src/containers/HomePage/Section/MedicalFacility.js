import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {
        
        return ( 
            <div className="section-share section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Cơ sở y tế nổi bật</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Hệ thống y tế Thu Cúc</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Bệnh viện Hữu nghị Việt Đức</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Bệnh viện Chợ Rẫy</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Bệnh viện Ung bướu Hưng Việt</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Hệ thống y tế MEDLATEC</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Bệnh viện Đa khoa Hồng Phát</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);