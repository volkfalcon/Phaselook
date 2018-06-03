import React, { Component } from 'react';
import PhotoItem from './PhotoItem';

class Photos extends Component {
    render() {
        let photoItems, _photoItems;
        if (this.props.photos) {
            _photoItems = this.props.photos.filter(function(photo){
                return photo.albumId === this.props.album.id;
            }.bind(this));
            photoItems = _photoItems.map(photo => {
                //console.log(photo);
                return (
                    <PhotoItem
                        visibleStatus={this.props.visibleStatus}
                        album={this.props.album}
                        key={photo.id}
                        photo={photo}
                    />
                );
            });
        }
        return (
            <div className="row collapse" id={"collapse-photo"+this.props.album.id}>
                {photoItems}
            </div>
        );
    }
}

export default Photos;
