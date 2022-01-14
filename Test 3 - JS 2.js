<script>
// JavaScript program to find median
// Muhammadd Septiono
// Function untuk median
function result(input, nilai)
{
    // First we sort the array
    input.sort();
 
    // check for even case
    if (nilai % 2 != 0)
        return input[parseInt(nilai / 2)];
 
    return (input[parseInt((nilai - 1) / 2)] + input[parseInt(nilai / 2)]) / 2.0;
}
 

    let input = [8, 7, 7, 9, 5, 4, 2, 9];
    let nilai = input.length;
    document.write("Median = " + result(input, nilai));
 
</script>

