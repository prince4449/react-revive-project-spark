import React from "react";
import { Autocomplete, TextField, FormControl } from "@mui/material";

const DropdownSearch = ({
  label = "",
  options = [],
  value = null, // Set default value to `null`
  onDropdownChange, // Handler for dropdown selection
  onSearchChange, // Handler for search input
  isSearchable = false,
  placeholder = "Select an option",
  labelKey = "label",
  valueKey = "value",
  disabled = false,
  multiple = false,
  fullWidth = true,
  className = "", // Custom className for styling
  ...props
}) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      disabled={disabled}
      className={className}
      {...props}
    >
      {isSearchable ? (
        <Autocomplete
          multiple={multiple}
          options={options}
          getOptionLabel={(option) => (option ? option[labelKey] : "")} // Ensure option has label
          value={value || (multiple ? [] : null)} // Handle initial value, array for multiple, null for single
          onInputChange={(event, newInputValue) => {
            // Trigger the search change handler when typing
            onSearchChange(newInputValue);
          }}
          onChange={(event, newValue) => {
            // Trigger the dropdown selection handler
            onDropdownChange(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              placeholder={placeholder}
              variant="outlined"
              size="small"
            />
          )}
        />
      ) : (
        <TextField
          select
          label={label}
          value={value || ""} // Ensure initial value is handled properly
          onChange={(e) => onDropdownChange(e.target.value)} // Call dropdown change handler
          variant="outlined"
          SelectProps={{
            multiple,
          }}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option[valueKey]} value={option[valueKey]}>
              {option[labelKey]}
            </option>
          ))}
        </TextField>
      )}
    </FormControl>
  );
};

export default DropdownSearch;
