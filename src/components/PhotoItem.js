import React, { Component } from 'react';

class PhotoItem extends Component {
    render() {
        return (
            <div className="col-lg-4 mt-5">
                <img alt="" className="img-fluid" src={this.props.visibleStatus?this.props.photo.url:""} />
            </div>
        );
    }
}

export default PhotoItem;
