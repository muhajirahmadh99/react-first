import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div>
      <h1>
        {err.status} : {err.statusText}
      </h1>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
