import React, { useState, useMemo } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const Dropdown = ({
  label = "",
  options = [],
  value,
  onChange,
  isSearchable = false,
  placeholder = "Select an option",
  labelKey = "label",
  valueKey = "value",
  disabled = false,
  multiple = false,
  fullWidth = true,
  className = "", // New className prop for custom styling
  ...props
}) => {
  const [search, setSearch] = useState("");

  // Filter options based on search input
  const filteredOptions = useMemo(() => {
    if (!isSearchable || !search) return options;
    return options.filter((option) =>
      option[labelKey].toLowerCase().includes(search.toLowerCase())
    );
  }, [options, search, isSearchable, labelKey]);

  // Handle typing inside dropdown to filter options
  const handleKeyUp = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      disabled={disabled}
      className={className}
      {...props}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        label={label}
        value={value}
        onChange={onChange}
        displayEmpty
        multiple={multiple}
        onKeyUp={isSearchable ? handleKeyUp : null} // Only trigger keyup search when isSearchable is true
        renderValue={(selected) =>
          multiple
            ? selected
                .map(
                  (sel) =>
                    filteredOptions.find((o) => o[valueKey] === sel)?.[labelKey]
                )
                .join(", ")
            : filteredOptions.find((option) => option[valueKey] === value)?.[labelKey] || placeholder
        }
      >
        <MenuItem disabled value="">
          {placeholder}
        </MenuItem>
        {filteredOptions.map((option) => (
          <MenuItem key={option[valueKey]} value={option[valueKey]}>
            {option[labelKey]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
