const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start >= end) {
      return;
    }
    const pivotIndex = partition(array, start, end);
    quick_sort(array, start, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, end);
    return array;
  };
  const partition = (array, start, end) => {
    const pivot = array[end];
    let i = start;
    for (let j = start; j < end; j++) {
      if (array[j] < pivot) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
      }
    }
    [array[i], array[end]] = [array[end], array[i]];
    return i;
  }; 
  vetor = [7,3,1,5,8];
  console.log(quick_sort(vetor)); 
  