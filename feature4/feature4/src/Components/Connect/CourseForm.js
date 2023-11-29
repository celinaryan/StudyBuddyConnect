import React, { useState, useEffect } from 'react';
import { getCourses, addClass } from '../../Services/CourseService';
import { addRequest, initialSave } from '../../Services/RequestService';
import Parse from 'parse';
import "../../form_styles.css";
const CourseForm = ({ user, setUser, onChange }) => {
    const [classes, setClasses] = useState([]);
    const [newClass, setNewClass] = useState('');

    useEffect(() => {
        const classId = 'yourClassIdHere'; // replace with an actual classId
        const user = Parse.User.current(); // get the current logged-in user
        initialSave(classId, user);  
        getCourses() 
            .then(classes => setClasses(classes))
            .catch(error => console.error(error));
    }, []);

    const handleAddClass = async (event) => {
        event.preventDefault();
        if (newClass) {
            let savedClass = await addClass(newClass);
    
            // get the objectId of the saved class
            let classId = savedClass.id;
    
            setNewClass('');
            setClasses(prevClasses => [
                ...prevClasses,
                {
                    id: classId,
                    name: newClass
                }]);
        }
    };

    const onChangeSingle = (event) => {
        // Handles change for a single select dropdown
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.preventDefault();
        if (!user || !user.canHelp || !user.needHelp) {
          console.error('User or canHelp/needHelp is not defined');
          return;
        }
        if(user.canHelp == user.needHelp){
            window.alert("You cannot submit a request for the same classes!");   
            return; 
        }
        
        console.log("Form Submitted");
        console.log('user.canHelp', user.canHelp);
        console.log('user.needHelp', user.needHelp);
        // API call or function call to send `user` data to the server
        const parseUser = Parse.User.current();
        const userPointer = new Parse.User();
        userPointer.id = parseUser.id;
       
        try {
            const response = await addRequest(user.canHelp, user.needHelp, userPointer); 
            console.log('User request created', response);
          } catch(error) {
            console.error('Error while creating User request: ', error);
            console.log('userPointer', userPointer);
            console.log('user.canHelp', user.canHelp);
            console.log('user.needHelp', user.needHelp);
          }
    }
    
    return (
        
       <div className="course-form">
        <h3>Fill out the form below to find a study buddy:</h3>
      
            <form onSubmit={handleSubmit}>
           <div className="form-group">
            <label className="form-label">Select a class you can help with:</label>
            <select id="canHelp-input" name="canHelp" onChange={onChangeSingle} value={user.canHelp}>
                <option value="">-Select One-</option>
                { classes.map((course) => <option key={course.id} value={course.id}>{course.name}</option> )}
            </select>
            </div>
            <div className="form-group">
                <label className="form-label">Select a class you need help with:</label>
                <select id="needHelp-input" name="needHelp" onChange={onChangeSingle} value={user.needHelp}>
                    <option value="">-Select One-</option>
                    { classes.map((course) => <option key={course.id} value={course.id}>{course.name}</option> )}
                </select>
            </div>
            <button type="submit" className="btn btn-primary"> Make Request </button>
            </form>
        <h3>Don't see the class you need? Fill out this form:</h3>
        <div className="form-group">
        <form onSubmit={handleAddClass}>
        <label className="form-label">Add a Class:</label>
        <input type="text" id="newClass" value={newClass} onChange={(e) => setNewClass(e.target.value)} />
        <button type="submit" className="btn btn-primary"> Add Class</button>
        </form>
    </div>
</div>
    )
}
export default CourseForm;