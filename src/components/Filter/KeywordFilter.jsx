import styles from './filter.module.css';
import sprite from '../../img/icons.svg';
import { useDispatch } from 'react-redux';
import { changeKeyword } from '../../redux/filters/filters-slice';
import { useState } from 'react';

const KeywordFilter = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const toChangeKeyword = ({ target }) => {
    setKeyword(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(changeKeyword(keyword));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.inputName}
        type="text"
        name="username"
        onChange={toChangeKeyword}
        placeholder="Search for anything"
      />
      <button className={styles.icon} type="submit" onSubmit={handleSubmit}>
        <svg>
          <use href={`${sprite}#icon-search`}></use>
        </svg>
      </button>
    </form>
  );
};
export default KeywordFilter;
