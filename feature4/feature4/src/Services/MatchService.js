import Parse from 'parse';
export async function getMatches() {
    const Request = Parse.Object.extend('Request');
    const User = Parse.Object.extend('User');
    const Classes = Parse.Object.extend('Classes');
    const query = new Parse.Query(Request);
    let matchObj = {};  // construct an empty object 
  
    // Get the current logged in user id
    try {
      const currentUser = Parse.User.current();
      const requests = await query.find();
      let canHelpWith = [];
      let needHelpWith = [];
  
      // Gather all class ids that the current user can help with and needs help with
      for (const request of requests) {
        if (request.get('user').id === currentUser.id) {
          canHelpWith.push(request.get('canHelpWith').id);
          needHelpWith.push(request.get('needHelpWith').id);
        }
      }
  
      // Find all users who either need help with a class the current user can help with or can help with a class the current user needs help with
      for (const request of requests) {
        const otherUserId = request.get('user').id;
        const otherUserCanHelpWith = request.get('canHelpWith').id;
        const otherUserNeedsHelpWith = request.get('needHelpWith').id;
  
        if (otherUserId !== currentUser.id && (canHelpWith.includes(otherUserNeedsHelpWith) || needHelpWith.includes(otherUserCanHelpWith))) {
          const userQuery = new Parse.Query(User);
          const classQuery = new Parse.Query(Classes);
  
          try {
            const otherUser = await userQuery.get(otherUserId);
            const helpClass = await classQuery.get(otherUserCanHelpWith);
            const needClass = await classQuery.get(otherUserNeedsHelpWith);
  
            matchObj[otherUserId] = {
              otherUser: { id: otherUserId, name: otherUser.get('firstName'), lastname: otherUser.get('lastName'), university:  otherUser.get('university'), major:  otherUser.get('major'), year:  otherUser.get('classYear')},
              canHelpClass: canHelpWith.includes(otherUserNeedsHelpWith) ? { id: otherUserNeedsHelpWith, name: helpClass.get('ClassName') } : null,
              needHelpClass: needHelpWith.includes(otherUserCanHelpWith) ? { id: otherUserCanHelpWith, name: needClass.get('ClassName') } : null,
            };
  
          } catch (error) {
            console.error('Error while fetching user or class: ', error);
          }
        }
      } 
  
      // Convert the matchObj into an array and return
      let matches = Object.values(matchObj);
      return matches;
  
    } catch (error) {
      console.error('Error while parsing requests: ', error);
    }
  }
export let Matches = {};
Matches.collection = [];
