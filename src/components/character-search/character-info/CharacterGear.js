import React from 'react';
import GetCharacterGear from './GetCharacterGear';

const CharacterGear = ({ gear }) => {
  return (
    <div>
      {/* Body-{gear.Body.ID}- {gear.Body.Dye} */}
      <GetCharacterGear item={gear.Body.ID} />
      {/* <GetCharacterGear item={gear.Bracelets.ID} />
      <GetCharacterGear item={gear.Earrings.ID} />
      <GetCharacterGear item={gear.Feet.ID} /> */}
      <GetCharacterGear item={gear.Hands.ID} />
      <GetCharacterGear item={gear.Head.ID} />
      <div>
        Legs-{gear.Legs.ID} -{gear.Legs.Dye}
      </div>
      <div>
        MainHand-{gear.MainHand.ID} -{gear.MainHand.Dye}
      </div>
      <div>
        Necklace-{gear.Necklace.ID} -{gear.Necklace.Dye}
      </div>
      <div>
        Ring1-{gear.Ring1.ID} -{gear.Ring1.Dye}
      </div>
      <div>
        Waist-{gear.Waist.ID} -{gear.Waist.Dye}
      </div>
    </div>
  );
};

export default CharacterGear;
