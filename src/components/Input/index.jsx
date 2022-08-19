import { forwardRef } from "react";

function Input(props, ref) {
  return (
    <>
      <input id={props.id} label={props.label} />
    </>
  );
}

export default forwardRef(Input);
