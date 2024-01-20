import './App.css'


function App() {
  return (
    <div className="App">

      <div className="welcome-back">
        <span>Welcome back! 👋</span>
      </div>

      <header>
        <span>Sign in to your account</span>
      </header>

      <form>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email"/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"/>
        </div>

        <button type="submit">CONTINUE</button>
      </form>

    </div>
  );
}

export default App;
