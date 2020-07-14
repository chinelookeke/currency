// output3.detail();



// ==============start===========
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('amtInput').addEventListener('input', function(e){
document.getElementById('output').style.visibility = 'visible';
var amt = e.target.value;
document.getElementById('usdEquivalent').innerHTML = amt*0.00258166;
document.getElementById('eurEquivalent').innerHTML = amt*0.00237;
document.getElementById('gbpEquivalent').innerHTML = amt*0.00207;

})