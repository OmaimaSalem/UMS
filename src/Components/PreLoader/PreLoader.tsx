import { Circles } from "react-loader-spinner";

export default function PreLoader() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Circles
        height="80"
        width="80"
        color="#FEAF00"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
