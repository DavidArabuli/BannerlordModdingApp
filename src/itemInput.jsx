import weapons from "./itemJsons/weapons.json";
import body_armors from "./itemJsons/body_armors.json";
import leg_armors from "./itemJsons/leg_armors.json";
import shoulder_armors from "./itemJsons/shoulder_armors.json";
import gloves from "./itemJsons/gloves.json";
import head_armors from "./itemJsons/head_armors.json";
import { nanoid } from "nanoid";

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

    return allInitialItems;
  };

  const forInput = getAllDefaultItems(unit);

  return (
    <div>
      <section className="allItems" key={nanoid()}>
        {forInput.map((object) => {
          return (
            <div key={nanoid()} className="itemBlock">
              {Object.entries(object)

                .filter(([key]) => key !== "unitId")

                .map(([key, value], index) => (
                  <div className="selectorDiv" key={key}>
                    <p>
                      Current {key}: {value}
                      {/* | Choose a new item:{" "} */}
                    </p>

                    <select
                      className="selector"
                      defaultValue={value}
                      name={`${key}-${id}-item`}
                      id={`${id}-${key}-${index}-selector`}
                    >
                      <option value={value}>{value}</option>
                      {itemSlotMapping[key].map((option) => (
                        <option
                          className="option"
                          key={option}
                          value={option}
                          id={`${option}-${id}-${index}-${key}`}
                        >
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
      <button className="btn" onClick={toggleExpand}>
        Expand\Collapse
      </button>
    </div>
  );
};
export default ItemInput;
