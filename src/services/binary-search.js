const binarySearch = (left, right, element) => {
  if (right >= left) {
    let middle = left + Math.floor((right - left) / 2);

    if (middle.toString() === element) {
      return middle;
    }

    if (middle > element) {
      return binarySearch(left, middle - 1, element);
    }

    return binarySearch(middle + 1, right, element);
  }

  return -1;
};

export default binarySearch;
