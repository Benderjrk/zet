function maxConsecutiveSum(arr) {
	let local = arr[0];
	let ultimate = arr[0];
	for (let i = 1; i < arr.length; i++) {
		local = Math.max(local + arr[i], arr[i]);
		ultimate = Math.max(local, ultimate);
	}
	return ultimate ? ultimate : 0;
}
