<script>
	const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function result(number) {
    	document.writeln("[");
        for (var i = 0; i < number.length; i++) {
            if (number[i] % 2 === 1) {
                document.writeln(number[i] + ",");
            }
        }
        document.writeln("]");
        document.writeln(", ");
        document.writeln("[");
        for (var i = 0; i < number.length; i++) {
            if (number[i] % 2 === 0) {
                document.writeln(number[i] + ",");
            }
        }
        document.writeln("]");
    }

    console.log(result(number));
</script>