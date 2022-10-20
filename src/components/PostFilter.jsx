import React from "react";
import MyCheckbox from "./UI/checkbox/MyCheckbox";
import MyButton from "./UI/button/Mybutton";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({
            searchInputRef,
            searchInput,
            checkboxRef,
            checked,
            checkboxIsChecked,
            search,
            clear   }) => {
  return (
    <div>
      <MyInput ref={searchInputRef} 
                value={searchInput} 
                onChange={search} />
      <div className="group">
        <MyCheckbox ref={checkboxRef} 
                    checked={checked} 
                    onChange={checkboxIsChecked} />
        <MyButton onClick={clear}>
            сброс
        </MyButton>
      </div>
    </div>
  );
};

export default PostFilter;
