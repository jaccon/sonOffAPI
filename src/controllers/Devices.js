const { authorization, authEmail, authPassword } = require('../config');

function checkAuth(token, res){
  if(token !== authorization){
    return res.status(400).json({'error' : 'Authorization denied'});
  }
} 

function checkDeviceId(deviceId, res){
  if(!deviceId){
    return res.status(400).json({'error' : 'Devide Id not found'});
  }
}

function cloudConnection(authEmail, authPassword){
  
  const ewelink = require('ewelink-api');

  return connection = new ewelink({
    email: authEmail,
    password: authPassword,
    region: 'us',
  });

}

module.exports = {

  async list(req, res){

    console.log('List Devices');
    const { token } = req.headers;

    checkAuth(token, res);
    
    const connection = cloudConnection(authEmail, authPassword);
    const response = await connection.getDevices();

    return res.status(200).json(response);

  },

  async toggle(req, res){
    
    console.log('Turn On/Off');
    const { token } = req.headers;
    const { deviceId } = req.body;
    
    checkAuth(token, res);
    checkDeviceId(deviceId, res);
    
    const connection = cloudConnection(authEmail, authPassword);

    await connection.toggleDevice(deviceId);
    const response = await connection.getDevices();

    return res.status(200).json(response);

  },

  async deviceStatus(req, res){

    console.log('Device Status ');
    
    const { token } = req.headers;
    const { deviceId } = req.body;
    
    checkAuth(token, res);
    checkDeviceId(deviceId, res);
    
    const connection = cloudConnection(authEmail, authPassword);
    const response = await connection.getDevicePowerState(deviceId);
    return res.status(200).json(response);
    
  },
  
  async deviceUsage(req, res){
    
    console.log('Device Status ');

    const { token } = req.headers;
    const { deviceId } = req.body;
    
    checkAuth(token, res);
    checkDeviceId(deviceId, res);
    
    const connection = cloudConnection(authEmail, authPassword);
    const response = await connection.getDevicePowerUsage(deviceId);
    return res.status(200).json(response);


  }



}