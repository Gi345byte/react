import "./welcome.css"
export function User(props) {
  return (
    <div className="container">
      <div className="card">
        <h1 className="tittle">hello buddy from user !</h1>
        <div className="actions">
          <button
            type="button"
            onClick={props.islogin}
            className="btn btn-blue"
          >
            Login
          </button>
          <button type="button" className="btn btn-green">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
