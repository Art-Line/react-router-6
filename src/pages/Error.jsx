import { Link } from "react-router-dom";

function Error() {
    return (
        <>
            <h1>Page not found</h1>
            <p><Link to="/">Main page</Link></p>
        </>
    )
}

export default Error;