import "./PageNotFound.scss";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <button><Link to="/">Go to Home Page</Link></button>
    </div>
  );
}
