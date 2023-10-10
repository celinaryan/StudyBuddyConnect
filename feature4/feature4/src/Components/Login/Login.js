export default function Login() {
    return (
      <section>
        <h1>Login to your Study Buddy account below:</h1>
        <div className="form">
          <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <br />
          </form>
        </div>
      </section>
    );
  }