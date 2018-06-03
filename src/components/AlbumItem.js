import React, { Component } from 'react';
import Photos from './Photos';

class AlbumItem extends Component {
  constructor(){
    super();
    this.state={
      visible:false
    }
  }
    visibleToggle(){
        this.setState({
            visible:!this.state.visible
        });
    }
    render() {
        return (
            <div className="col-xs-12" id="accordion-photo">
                <button type="button" onClick={this.visibleToggle.bind(this)}className="btn btn-outline-primary btn-lg btn-block mt-3" data-toggle="collapse" data-target={"#collapse-photo"+this.props.album.id} aria-expanded="false" aria-controls={"collapse-photo"+this.props.album.id} data-parent="#accordion-photo">{this.props.album.title}</button>
                <Photos
                    visibleStatus={this.state.visible}
                    album={this.props.album}
                    photos={this.props.photos}
                />
            </div>
        );
    }
}

export default AlbumItem;
