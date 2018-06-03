import React, { Component } from 'react';
import AlbumItem from './AlbumItem';

class Albums extends Component {
    render() {
        let albumItems, _albumItems;
        if (this.props.albums) {
            _albumItems = this.props.albums.filter(function(album){
                return album.userId === this.props.user.id;
            }.bind(this));
            albumItems = _albumItems.map(album => {
                //console.log(album);
                return (
                    <AlbumItem
                        user={this.props.user}
                        key={album.id}
                        album={album}
                        photos={this.props.photos}
                    />
                );
            });
        }
        return (
            <div className="albums mt-3 text-center" id="accordion-album">
                <a data-toggle="collapse" href={"#collapse-album"+this.props.user.id} role="button" aria-expanded="false" aria-controls={"collapse-album"+this.props.user.id} data-parent="#accordion-album">
                    <h4><strong>Albums</strong></h4>
                </a>
                
                <ul className="collapse" id={"collapse-album"+this.props.user.id}>
                    {albumItems}
                </ul>
            </div>
        );
    }
}

export default Albums;
