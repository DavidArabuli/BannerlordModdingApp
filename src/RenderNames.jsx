const RenderNames = ({ npcCharacters }) => {
  if (!npcCharacters) return null;
  const newArray = npcCharacters.map((name, index) => {
    const { skills } = name;
    const skillId = skills?.skill?.[0]?._attributes?.id;
    const skillValue = skills?.skill?.[0]?._attributes?.value;

    return (
      <h4 key={index}>
        {skillId} {skillValue}
      </h4>
    );
  });
  return <div>{newArray}</div>;
};
export default RenderNames;

// const RenderNames = ({ npcCharacters }) => {
//   if (!npcCharacters) return null;
//   const newArray = npcCharacters.map((name, index) => {
//     return (
//       <h4 key={index}>
//         {name.skills?.skill?.[0]?._attributes?.id}{" "}
//         {name.skills?.skill?.[0]?._attributes?.value}
//       </h4>
//     );
//   });
//   return <div>{newArray}</div>;
// };
// export default RenderNames;
