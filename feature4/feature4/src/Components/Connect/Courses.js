const Course = Parse.Object.extend("Classes");
const course = new Course();


course.save()
  .then((course) => {
    // The object was saved successfully.
    console.log(course);
  }, (error) => {
    // The save failed.
    console.error('Failed to create new object, with error code: ' + error.message);
  });