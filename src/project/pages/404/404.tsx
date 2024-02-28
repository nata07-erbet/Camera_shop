import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { Logo } from '../../components/logo/logo';

function NotFoundPage() {
  return (
    <>
      <header className="game__header">
        <Logo />
      </header>
      <div className="container" data-testid='error-page' style={{textAlign:'center'}}>
        <h1 >404 Not found</h1>
        <Link to={AppRoute.Main}>
          Go to main Page
        </Link>
      </div>

    </>

  );
}

export { NotFoundPage };
