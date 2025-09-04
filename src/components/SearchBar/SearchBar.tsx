import toast from 'react-hot-toast';
import s from './SearchBar.module.css';
import { FormEvent } from 'react';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.namedItem(
      'serchInput'
    ) as HTMLInputElement | null;
    const inputValue = input?.value ?? '';

    if (!inputValue) {
      return toast('Text must be entered to search for images!', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
    onSubmit(inputValue);
  };

  return (
    <header className={s.searchWrap}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.searchInput}
          name='serchInput'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button className={s.searchBtn} type='submit'>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
