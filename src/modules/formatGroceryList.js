const formatGroceryList = (data) => {
  const rows = data.feed.entry;
  const groupedGroceryList = {};

  let currentGroup = '';

  rows.forEach((row) => {
    if (row.content.$t) {
      groupedGroceryList[currentGroup].push({
        name: row.gsx$item.$t,
        price: Number(row.gsx$price.$t.replace('$', '')),
        calories: Number(row.gsx$calories.$t),
        nonNutritious: !!row['gsx$non-nutritious'].$t,
        quantity: 0,
      });
    } else {
      currentGroup = row.title.$t;
      groupedGroceryList[currentGroup] = [];
    }
  });

  return groupedGroceryList;
};

export default formatGroceryList;
