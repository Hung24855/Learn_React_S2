import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      Not found <br></br>
      <buttonc class="btn btn-primary bg-white ">
        <Link to={"/"}>Go to HomePage</Link>
      </buttonc>
    </div>
  );
};

export default NotFound;
