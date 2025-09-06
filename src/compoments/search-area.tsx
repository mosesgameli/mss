"use client";

import { useTheme } from "nextra-theme-docs";
import { Search, Select } from "nextra/components";

const options = [
  { id: "light", name: "Light" },
  { id: "dark", name: "Dark" },
  { id: "system", name: "System" },
];

export function SearchArea() {
  const { theme, setTheme } = useTheme();
  const selectedOption = options.find((opt) => opt.id === theme)?.name;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        placeItems: "center",
      }}
    >
      <div style={{ marginRight: "10px" }}>
        <Select
          value={theme}
          onChange={setTheme}
          selectedOption={selectedOption}
          options={options}
          title="Theme Option"
        />
      </div>
      <Search placeholder="Search blog..." />
    </div>
  );
}
