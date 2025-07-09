import "./welcome.css"

export function Welcome(props) {
  let isadmin = true;

  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="tittle">Hello calling from welcome </h1>

          <div className="actions">
            <button
              type="button"
              onClick={props.islogout}
              className="btn btn-red"
            >
              logout
            </button>
            {isadmin && (
              <button type="button" className="btn btn-dark">
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
