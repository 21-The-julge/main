interface DropdownProps {
  options: string[];
}

export default function Dropdown({ options }: DropdownProps) {
  return (
    <select>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
