import { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";

import { setSelected } from "../reduxToolkit/features/combinationSlice";

const ComboBox = (props: any) => {
  const combination = useSelector((state: any) => {
    return state.combination;
  });

  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <Autocomplete
        blurOnSelect={true}
        disabled={props.disabled}
        inputValue={inputValue}
        clearOnEscape
        disablePortal
        options={props.options}
        sx={{ width: 200 }}
        getOptionLabel={(option: any) => {
          return option.name || option.cantidad;
        }}
        onInputChange={(event, newInputValue, reason) => {
          setInputValue(newInputValue);

          let newState = [];
          if (localStorage.getItem("bakeryData")) {
            newState = JSON.parse(localStorage.getItem("bakeryData") || "{}");
            newState[props.index] = newInputValue;
            localStorage.setItem("bakeryData", JSON.stringify(newState));
          } else {
            newState = [...combination];
            newState[props.index] = newInputValue;
            localStorage.setItem("bakeryData", JSON.stringify(newState));
          }

          dispatch(
            setSelected({
              index: props.index,
              value: newState,
            })
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        )}
      />
    </>
  );
};

export default ComboBox;
