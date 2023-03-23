function  quickSort(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  
	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)
		i++;
		while (parseInt(arr[j]) > pivot)
			j--;
		        if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}
	if (left < j)
		quickSort(arr, left, j);
	if (i < right)
		quickSort(arr, i, right);
	return arr;
}

vetor = [7,3,1,5,8]
console.log(quickSort(vetor,7,8))