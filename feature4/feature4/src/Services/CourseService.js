import Parse from 'parse';

// Fetch all courses
export const getCourses = async() => {
    const Course = Parse.Object.extend('Classes');
    const query = new Parse.Query(Course);

    const courses = [];
    try {
        const courseObjects = await query.find();
        const courses = courseObjects.map(courseObject => ({
            id: courseObject.id,
            name: courseObject.get('ClassName')
        }));
        return courses;
    } catch (error) {
        console.error('Error while fetching courses: ', error);
    }

    return courses;
}
export const addClass = async (newClassName) => {
    const Class = Parse.Object.extend('Classes');
    const query = new Parse.Query(Class);

    // Search for Class with name 'newClassName'
    query.equalTo("ClassName", newClassName);

    let classObject;

    try {
        const classes = await query.find();

        if (classes.length > 0) {
            // Class already exists, use first match
            classObject = classes[0];
        } else {
            // Class doesn't exist, create a new one
            classObject = new Class();
            classObject.set('ClassName', newClassName);
            await classObject.save();
        }

        return classObject;

    } catch (error) {
        console.error('Error while creating/finding Class: ', error);
        throw error;
    }
}