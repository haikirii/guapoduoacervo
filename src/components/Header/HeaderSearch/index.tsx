import { SetStateAction, useState } from "react";
import styles from "./index.module.scss";

const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(Boolean);

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("teste de busca:", searchQuery);
  };

  return (
    <form className={styles.form} onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Busque por obra, autor, tag, artista..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default HeaderSearch;
