import React from "react";
import classes from "./MyCheckbox.module.css";

const MyCheckbox = React.forwardRef((props, ref) => {
  return (
    <div>
      <input
        type="checkbox"
        className={classes.myCheckbox}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default MyCheckbox;
