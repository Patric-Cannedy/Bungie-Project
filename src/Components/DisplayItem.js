import React from 'react';
import ItemSearch from './ItemSearch';

const DisplayItem = ({showPage, togglePreview, img, itemName}) => {

    return(
        <div >
            <div>
            <ItemSearch img={img} itemName={itemName} togglePreview={togglePreview} showPage={showPage}/> 
            </div>
        </div>
    );
}
export default DisplayItem;

// style={{ display: showPage ? 'block' : 'none' }} add back in to that first div