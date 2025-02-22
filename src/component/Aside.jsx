import { Link } from "react-router";

export function Aside() {
  return (
    <>
      <div className="custom2-bg w-25 rounded px-2">
        <Link to="0/edit" className="btn btn-custom w-75 m-3">Add New Product</Link>
        <div className="input-group m-3 w-75">
          <button
            className="btn "
            type="button"
            id="button-addon1">
            <i type="button" className="fa fa-search" aria-hidden="true"></i>
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search For Product"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
    </>
  );
}
