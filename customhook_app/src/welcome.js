export function Welcome(props){
    const isadmin=props.admin
    return <>
    <h1>Hello ! Welcome to our webpage</h1>
    <button type="button">Logout</button>
    {isadmin && <button type="button">Delete</button>}
    </>

}