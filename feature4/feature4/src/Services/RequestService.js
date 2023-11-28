import Parse from 'parse';

export const addRequest = async(request) => {
    const Request = Parse.Object.extend('Request');
    const query = new Parse.Query(Request);

    // CanHelpWith and NeedHelpWith are Pointers, so we have to make sure  
    // to retrieve the Course instance from the Classes table to set them.
    const CanHelp = Parse.Object.extend('Classes');
    const canHelpQuery = new Parse.Query(CanHelp);
    canHelpQuery.equalTo("ClassName", request.canHelp);

    const NeedHelp = Parse.Object.extend('Classes');
    const needHelpQuery = new Parse.Query(NeedHelp);
    needHelpQuery.equalTo("ClassName", request.needHelp);

    // Perform the queries in parallel
    const [canHelp, needHelp] = await Promise.all([canHelpQuery.first(), needHelpQuery.first()]);

    const newRequest = new Request();

    // Set the values of the Class
    newRequest.set("canHelpWith", canHelp); // assuming that "canHelpWith" is pointer to "Classes" table
    newRequest.set("needHelpWith", needHelp); // assuming that "needHelpWith" is pointer to "Classes" table

    try {
        const result = newRequest.save();
        // If the save was successful, 'result' will contain the saved Request object
        console.log('Request saved', result);
    } catch (error) {
        console.error('Error while creating Request: ', error);
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
export let Requests = {};
Requests.collection = [];
