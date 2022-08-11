import React from 'react';
import Item from '../ItemTemplate';

const Results = ({
    itemIcon, 
    flavorText, 
    itemName, 
    tierTypeName, 
    typeDisplayName, 
    slotTypeHash, 
    waterMark,
    screenShot}) => {

    return(
        <div>
            <div>
            <Item 
                itemIcon={itemIcon} 
                itemName={itemName} 
                flavorText={flavorText} 
                tierTypeName={tierTypeName} 
                typeDisplayName={typeDisplayName}
                slotTypeHash={slotTypeHash}
                waterMark={waterMark}
                screenShot={screenShot}/> 
            </div>
        </div>
    );
}
export default Results; 