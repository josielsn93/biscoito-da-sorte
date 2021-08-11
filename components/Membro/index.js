import React, { Component }  from 'react';

class Membro extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: [ 
                {id: 1, username: 'Josiel', curtidas: 300, comentarios: 30},
                {id: 2, username: 'Cilicia', curtidas: 3, comentarios: 1},
                {id: 3, username: 'Joel', curtidas: 40, comentarios: 44},
            ]
        };
    }

   

    render(){
        return(
            <div>
               
            </div>
        );
    }
}

export default Membro;