import React from 'react';
import gifPreloader from '../../../assets/images/preloader.gif';

let preloader = (props) => {
    return (
        <div style={{ backgroundColor: 'chocolate' }}>
            <img src={gifPreloader} />
        </div >
    )
}
export default preloader;