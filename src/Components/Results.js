import React from 'react';
import { useParams } from 'react-router';
import Item from './ItemTemplate';

const Results = ({showPage, togglePreview, itemIcon, flavorText, itemName, tierTypeName, typeDisplayName}) => {

    return(
        <div>
            <div>
            <Item itemIcon={itemIcon} itemName={itemName} togglePreview={togglePreview} showPage={showPage} flavorText={flavorText} tierTypeName={tierTypeName} typeDisplayName={typeDisplayName}/> 
            </div>
        </div>
    );
}
export default Results;

// style={{ display: showPage ? 'block' : 'none' }} add back in to that first div
//add displayItem somewhere