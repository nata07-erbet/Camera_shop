import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function NotFoundPage() {
  return (
    <>
      <p>404 Not found</p>
      <Link to={AppRoute.Main}>
        Go to main Page
      </Link>
    </>

  );
}

export { NotFoundPage };
