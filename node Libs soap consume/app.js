var soap = require('soap');
  var url = 'http://170.1.1.20:7001/ServicioVisacion/ServicioVisacionService?wsdl';
  var args = {name: 'value'};
  soap.createClient(url, function(err, client) {
	  
      client.MyFunction(args, function(err, result) {
          console.log(result);
      });
	  client.setSecurity(new soap.BasicAuthSecurity('visacion', 'visacion2017'));
  });