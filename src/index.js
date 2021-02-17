module.exports = function toReadable(n)
{
    var b = n%10, a = (n-b)/10, // n = 10*a+b
        A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
               'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty',
              'sixty', 'seventy', 'eighty', 'ninety']; 	
    if(n == 0) return "zero"
    if(n < 10) return A1[n - 1];
    if (n > 10 && n < 20) return A2[n-11]; 
    if (n >= 100 && n < 1000) {
    	n = n.toString().split('');
      let a = n[0], b = n[1], c = n[2];
      let arr = [];
      if(b == 0 && c == 0){
      	arr.push(A1[a - 1] + ' hundred');
        return arr.join('');
      }
      if(b == 0){
      	arr.push(A1[a - 1] + ' hundred ' + A1[c - 1]);
        return arr.join('');
      }
      if(c == 0){
      	arr.push(A1[a - 1] + ' hundred ' + A3[b - 1]);
        return arr.join('');
      }
      if(b == 1 && c != 0){
      	arr.push(A1[a - 1] + ' hundred ' + A2[c - 1])
      }
      else {
      	arr.push(A1[a - 1] + ' hundred ' + A3[b - 1] + ' ' + A1[c - 1])
      }
      return arr.join(' ');
    }
    if (b == 0) return A3[a-1];
    return A3[a-1]+' '+A1[b-1];
}
