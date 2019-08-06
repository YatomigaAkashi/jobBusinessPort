const charts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','q','w','e','r','t','y','u','i','o','p','s','d','f','g','h','j','k','l','z','x','v','n','m'];

  var res = '';
  for (var i = 0; i < 6; i++) {
    var id = Math.ceil(Math.random() * 61);
    res += charts[id];
  }
module.exports =res
