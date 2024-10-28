export const paginate = (items, itemsPerPage, currentPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return items.slice(startIndex, startIndex + itemsPerPage);
};
