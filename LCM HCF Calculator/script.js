document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    const hcf = calculateHCF(num1, num2);
    const lcm = calculateLCM(num1, num2, hcf);

    document.getElementById('hcfResult').innerText = `HCF: ${hcf}`;
    document.getElementById('lcmResult').innerText = `LCM: ${lcm}`;
});

function calculateHCF(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function calculateLCM(a, b, hcf) {
    return (a * b) / hcf;
}