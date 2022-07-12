import React from 'react';
import Item from './ItemTemplate';

const DisplayItem = ({showPage, togglePreview, itemIcon, itemName, flavorText, tierTypeName, typeDisplayName}) => {
    return(
        <div style={{ display: showPage ? 'block' : 'none' }}>

            <div>
            <Item itemIcon={itemIcon} itemName={itemName} togglePreview={togglePreview} showPage={showPage} flavorText={flavorText} tierTypeName={tierTypeName} typeDisplayName={typeDisplayName}/> 
            </div>
        </div>
    );
}
export default DisplayItem;

// style={{ display: showPage ? 'block' : 'none' }} add back in to that first div
//add displayItem somewhere