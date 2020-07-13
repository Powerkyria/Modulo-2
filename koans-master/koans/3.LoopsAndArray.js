describe('3. Loops and Array', function() {
	it('Array', function() {
		let array = [];
		array[0] = 'bananas';
		array[1] = 'pineapple';
		array[2] = Array.isArray(array); /*XD*/
		array[3] = 'fruit juice';

		assert.equal(array[2], true);
	});

	it('Array length', function() {
		let array = [ 'bananas', 'pineapple' ];

		assert.equal(array.length, 2);
	});

	it('Pop', function() {
		let array = [
			'table',
			'bed',
			'chair',
			'tv',
			'mirror',
			'window',
			'door',
			'watch',
			'lamp',
			'blanquet',
			'closet'
		];

		array.pop();

		assert.equal(array.length, 10);
	});

	it('1Push ', function() {
		// You can change the assert
		let array = [ 'table', 'bed', 'sofa' ];

		array.push('wardrove');

		assert.equal(array.length, 4);
	});

	it('2Push ', function() {
		let array = [];

		// array.push("wardrove");

		assert.equal(array.length, 0);
	});

	it('1position array', function() {
		let array = [ 'bananas', 'pineapple', 'water melon' ];
		array.pop();
		array.push('pear');
		array.push('orange');

		let result = array[3];

		assert.equal(result, 'orange');
	});

	it('2position array', function() {
		let array = [ 'bananas', 'pineapple', 'pear', 'orange' ];
		array.pop();
		array.push('pear');
		array.push('orange');

		let result = array[4];

		assert.equal(result, 'orange');
	});

	it('Loop, For', function() {
		let lastGenerateMessage = '';
		for (let i = 0; i <= 3; i++) {
			lastGenerateMessage = 'Walking east ' + i + ' step';
		}

		assert.equal(lastGenerateMessage, 'Walking east 3 step');
	});

	it('Loop, While', function() {
		let lastGenerateMessage = '';
		let steps = -1;
		while (steps < 0) {
			steps = steps + 1;
			lastGenerateMessage = 'Walking east ' + steps + ' step';
		}

		assert.equal(lastGenerateMessage, 'Walking east 0 step');
	});
});
