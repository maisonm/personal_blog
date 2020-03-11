exports.sort = (dataArray, sortby) => {
  switch (sortby) {
    case 'most_recent':
      return dataArray.reverse();
      break;

    case 'oldest':
      return dataArray;
      break;
  }
};
