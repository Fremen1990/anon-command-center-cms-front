import React, { useState } from "react";

const CheckboxApproved = ({ approved, handleFilter }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    // return the first index or -1
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];
    // if currently checked was not already in checked state -> push
    // else pull /take off
    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }
    // console.log(newCheckedCategoryId)
    setChecked(newCheckedCategoryId);
    handleFilter(newCheckedCategoryId);
  };

  return approved.map((c, i) => (
    <li key={i} className="list-unstyled my-2">
      <input
        onChange={handleToggle(c._id)}
        value={checked.indexOf(c._id === -1)}
        type="checkbox"
        className="form-check-input mx-2"
      />
      <label className="form-check-lable">{c.name}</label>
    </li>
  ));
};

export default CheckboxApproved;
