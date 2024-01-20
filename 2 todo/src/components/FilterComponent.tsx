import { useRecoilState } from "recoil";
import { filterAtom } from "../store/atoms/filterAtom";

export default function FilterComponent() {
  const [filterText, setFilterText] = useRecoilState(filterAtom);
  return (
    <input
      type="text"
      placeholder="filter text here..."
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
  );
}
