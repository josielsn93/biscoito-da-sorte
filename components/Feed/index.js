import React, { Component } from 'react';

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas ' : this.props.curtidas + ' curtida '} /&nbsp;
                {this.props.comentarios > 1 ? this.props.comentarios + ' comentários ' : this.props.comentarios + ' comentário '}
                </a>
                <hr />
            </div>
        );
    }
}

export default Feed;