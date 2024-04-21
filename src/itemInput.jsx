import { useRef, useState, useEffect } from "react";
import weaponsArray from "./itemJsons/weaponsArray.json";

const ItemInput = ({ unit }) => {
  const { _attributes: { id } = {}, skills: { skill } = {} } = unit;

  const getAllDefaultItems = (unit) => {
    const allInitialItems = [];

    if (Array.isArray(unit.Equipments.EquipmentRoster)) {
      unit.Equipments.EquipmentRoster[0].equipment.forEach((item) => {
        const unitItem = {
          unitId: id,
          itemSlot: item._attributes.slot,
          itemId: item._attributes.id,
        };

        // console.log(unitItem.unitId);
        // console.log(unitItem.itemSlot);
        // console.log(unitItem.itemId);
        allInitialItems.push(unitItem);
      });
    } else {
      unit.Equipments.EquipmentRoster.equipment.forEach((item) => {
        const unitItem = {
          unitId: id,
          itemSlot: item._attributes.slot,
          itemId: item._attributes.id,
        };

        // console.log(unitItem.unitId);
        // console.log(unitItem.itemSlot);
        // console.log(unitItem.itemId);
        allInitialItems.push(unitItem);
      });
    }
    console.log(allInitialItems);
    return allInitialItems;
  };

  const weapon = Array.isArray(unit.Equipments.EquipmentRoster)
    ? unit.Equipments.EquipmentRoster[0]?.equipment[0]?._attributes?.id
    : unit.Equipments.EquipmentRoster.equipment[0]?._attributes?.id;

  const slot = Array.isArray(unit.Equipments.EquipmentRoster)
    ? unit.Equipments.EquipmentRoster[0]?.equipment[0]?._attributes?.slot
    : unit.Equipments.EquipmentRoster.equipment[0]?._attributes?.slot;

  const forInput = getAllDefaultItems(unit);

  return (
    <section className="allItems">
      {forInput.map(({ unitId, itemId, itemSlot }) => {
        return (
          <div className="itemBlock">
            <label>Current item: {itemId} | Choose a new item: </label>
            <select
              defaultValue={itemId}
              name={`${itemSlot}-${unitId}`}
              id={unitId}
            >
              <option value="">Select an option</option>
              {weaponsArray.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </section>
  );
};
export default ItemInput;
