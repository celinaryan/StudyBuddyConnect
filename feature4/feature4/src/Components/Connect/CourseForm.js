import React, { useState, useEffect } from 'react';
import { getCourses, addClass } from '../../Services/CourseService';
import Parse from 'parse';
import "../../form_styles.css";
const CourseForm = ({ user, setUser, onChange }) => {
    const [classes, setClasses] = useState([]);
    const [newClass, setNewClass] = useState('');

    useEffect(() => {
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

    const addRequest = async (user) => {
        const Req = Parse.Object.extend('Request');
        const req = new Req();
    
        req.set('user', user);
        req.set('canHelpWith', user.canHelp);
        req.set('needHelpWith', user.needHelp);
    
        try {
            const response = await req.save();
            // Access the newly created object
            console.log('Request created', response);
            return response;
        } catch (error) {
            console.error('Error while creating Request: ', error);
            throw error;
        }
    }

    const onChangeMulti = (event) => {
        const selected = Array.from(event.target.options)
                    .filter(option => option.selected)
                    .map(option => option.value);
    
        setUser({ ...user, canHelp: selected });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
    
        // API call or function call to send `user` data to the server
        addRequest(user)
            .then(response => {
                console.log('User request created', response);
            })
            .catch(error => {
                console.error('Error while creating User request: ', error);
            });
    }
    
    return (
       <div className="course-form">
            <form onSubmit={addRequest}>
            <div className="form-group">
                <label className="form-label">Classes you can help with:</label>
                <select id="canHelp-input" name="canHelp" onChange={onChangeMulti} value={user.canHelp} multiple>
                    <option value="">-Select Multiple-</option>
                    {
                        classes.map((course, index) => <option key={index} value={course.id}>{course.name}</option>)
                    }
                </select>
            </div>
            <div className="form-group">
                <label className="form-label">Classes you need help with:</label>
                <select id="needHelp-input" name="needHelp" onChange={onChangeMulti} value={user.needHelp} multiple>
                    <option value="">-Select Multiple-</option>
                    {
                        classes.map((course, index) => <option key={index} value={course.id}>{course.name}</option>)
                    }
                </select>
            </div>
            <button type="submit" className="btn btn-primary"> Make Request </button>
            </form>
        <p> <b>Don't see the class you need?</b></p>
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