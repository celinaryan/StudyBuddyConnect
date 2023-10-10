export default function Signup() {
    return (
      <section>
        <h1> Sign up and create a Study Buddy account below:</h1>
        <div className="form">
          <form>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" /> <br />
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <br />
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" />
            <br />
            <label for="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" />
            <br />
            <label for="university">University:</label>
            <input type="text" id="university" name="university" />
            <br />
            <label for="major">Major:</label>
            <input type="text" id="major" name="major" />
            <br />
            <label for="canHelpWith">Classes You Can Help with:</label>
            <input type="text" id="canHelpWith" name="canHelpWith" />
            <br />
            <label for="needHelpWith">Classes You Need Help with:</label>
            <input type="text" id="needHelpWith" name="needHelpWith" />
            <br />
            <input type="submit" value="Register" />
          </form>
        </div>
      </section>
    );
  }