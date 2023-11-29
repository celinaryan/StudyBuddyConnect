import Parse from 'parse';

export const addRequest = async(canHelpInput, needHelpInput, user) => {
  const Request = Parse.Object.extend('Request');
  const Class = Parse.Object.extend('Classes');

  console.log('canHelpInput', canHelpInput);
  console.log('needHelpInput', needHelpInput);

    // `Class.createWithoutData(classId)` expects a single classId
    let canHelp = Class.createWithoutData(canHelpInput);
    let needHelp = Class.createWithoutData(needHelpInput);

  const newRequest = new Request();  

  newRequest.set("canHelpWith", canHelp); 
  newRequest.set("needHelpWith", needHelp); 
  newRequest.set("user", user); 

  try {
    const result = await newRequest.save();
    console.log('Request saved', result);
  } catch (error) {
    console.error('Error while creating Request: ', error);
    throw error;
  }
}

export const getAllRequests = async () => {
  const Request = Parse.Object.extend('Request');
  const query = new Parse.Query(Request);
  const requests = await query.find();
  return requests;
}

export const getUserById = async(userId) => {
  const User = Parse.User;
  const query = new Parse.Query(User);
  const user = await query.get(userId);
  return user;
}

export const getClassById = async(classId) => {
  const Class = Parse.Object.extend('Classes');
  const query = new Parse.Query(Class);
  const classObj = await query.get(classId);
  return classObj;
}
// To do this, you can create a temporary function like:

export const initialSave = async (classId, user) => {
  const Request = Parse.Object.extend('Request');
  const Class = Parse.Object.extend('Classes');

  const classInstance = Class.createWithoutData(classId);

  const newRequest = new Request();  
  newRequest.set("canHelpWith", [classInstance]);
  newRequest.set("user", user); 

  try {
    const result = await newRequest.save();
    console.log('First Request saved', result);
  } catch (error) {
    console.error('Error while creating first Request: ', error);
  }
}

export let Requests = {};
Requests.collection = [];
