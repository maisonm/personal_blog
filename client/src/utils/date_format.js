export const date_format = {
  mmddyyyy: (isoDate) => {
    const date = new Date(isoDate);
    const formatedDate = `${
      date.getMonth() + 1
    }-${date.getDate()}-${date.getFullYear()}`;
    return formatedDate;
  },
};
