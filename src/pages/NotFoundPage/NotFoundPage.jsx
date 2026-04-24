import { Link } from 'react-router';
import style from '../../components/container.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <h3>NotFoundPage</h3>
      <Link to="/" />
    </div>
  );
};
export default NotFoundPage;
