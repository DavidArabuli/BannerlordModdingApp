import { useRef, useState, useEffect } from "react";
import weapons from "./itemJsons/weapons.json";
import body_armors from "./itemJsons/body_armors.json";
import leg_armors from "./itemJsons/leg_armors.json";
import shoulder_armors from "./itemJsons/shoulder_armors.json";
import gloves from "./itemJsons/gloves.json";
import head_armors from "./itemJsons/head_armors.json";

const ItemInput = ({ unit }) => {
  const { _attributes: { id } = {}, skills: { skill } = {} } = unit;

  const itemSlotMapping = {
    Item0: weapons,
    Item1: weapons,
    Item2: weapons,
    Item3: weapons,
    Body: body_armors,
    Leg: leg_armors,
    Gloves: gloves,
    Cape: shoulder_armors,
    Head: head_armors,
  };

  const toggleExpand = (e) => {
    e.preventDefault();
    const section = e.target.previousElementSibling;
    section.classList.toggle("open");
  };

  const getAllDefaultItems = (unit) => {
    const allInitialItems = [];
    const unitItem = {
      unitId: unit._attributes.id,
      Item0: "",
      Item1: "",
      Item2: "",
      Item3: "",
      Body: "",
      Leg: "",
      Gloves: "",
      Cape: "",
      Head: "",
    };

    if (Array.isArray(unit.Equipments.EquipmentRoster)) {
      unit.Equipments.EquipmentRoster.forEach((roster) => {
        const equipment = roster.equipment;

        // const unitItem = {
        //   unitId: unit._attributes.id,
        //   Item0: "",
        //   Item1: "",
        //   Item2: "",
        //   Item3: "",
        //   Body: "",
        //   Leg: "",
        //   Gloves: "",
        //   Cape: "",
        //   Head: "",
        // };

        if (Array.isArray(equipment)) {
          for (const slot in unitItem) {
            const item = equipment.find(
              (equipmentItem) => equipmentItem._attributes.slot === slot
            );

            if (item) {
              unitItem[slot] = item._attributes.id;
            }
          }
        }

        allInitialItems.push(unitItem);
      });
    } else {
      const equipment = unit.Equipments.EquipmentRoster.equipment;

      // const unitItem = {
      //   unitId: unit._attributes.id,
      //   Item0: "",
      //   Item1: "",
      //   Item2: "",
      //   Item3: "",
      //   Body: "",
      //   Leg: "",
      //   Gloves: "",
      //   Cape: "",
      //   Head: "",
      // };

      if (Array.isArray(equipment)) {
        for (const slot in unitItem) {
          const item = equipment.find(
            (equipmentItem) => equipmentItem._attributes.slot === slot
          );

          if (item) {
            unitItem[slot] = item._attributes.id;
          }
        }
      }

      allInitialItems.push(unitItem);
    }

    // console.log(allInitialItems);
    return allInitialItems;
  };

  const forInput = getAllDefaultItems(unit);
  // forInput - is array of objects.
  // console.log(forInput);

  return (
    <div>
      <section className="allItems">
        {forInput.map((object) => {
          return (
            <div
              className="itemBlock"
              // key={object.unitId}
            >
              {Object.entries(object)

                .filter(([key]) => key !== "unitId")

                .map(([key, value]) => (
                  <div key={key}>
                    <label>
                      Current {key}: {value} | Choose a new item:{" "}
                    </label>

                    <select
                      defaultValue={value}
                      name={`${key}-${id}-item`}
                      id={id}
                    >
                      <option value="">Select an option</option>
                      {itemSlotMapping[key].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
            </div>
          );
        })}
      </section>
      <button onClick={toggleExpand}>expand</button>
    </div>
  );
};
export default ItemInput;
