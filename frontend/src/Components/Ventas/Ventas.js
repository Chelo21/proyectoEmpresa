import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  RingLoader,
  ClockLoader,
  PulseLoader,
  PropagateLoader,
  GridLoader,
} from "react-spinners";

// display: "block",
// margin: "0 auto",

const override = {
  //   borderColor: "blue",
  borderWidth: "5px",
  left: '150px'
};

const Ventas = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* <RingLoader color="#9ac9e7" /> */}
      <RingLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <ClockLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <PulseLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <PropagateLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        {/* color="#36d7b7" */}
      <GridLoader
          color={color}
    loading={loading}
    cssOverride={override}
    size={20}
    aria-label="Loading Spinner"
    data-testid="loader"  

      />
    </div>
  );
};

export default Ventas;
