export const SearchArray = (id, Array) => {
  let listResulted = [];
  Array.forEach((item) => {
    if (item.userId === id) listResulted.push(item);
  });
  return listResulted;
};

export const JoinedArray = (Array1, Array2) => {
  return Array1.map((item) => {
    let result = SearchArray(item.id, Array2);
    if (result) item.posts = result;
    return item;
  });
};