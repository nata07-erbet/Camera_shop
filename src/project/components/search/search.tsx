import { ChangeEvent, useState, useEffect } from 'react';
import { ReqPath, START_SEARCH_TERM } from '../../const/const';
import { TProduct } from '../../types';
import { SearchComponent } from '../search-component/search-component';
import { api } from '../../services';


function Search () {
  const [ products, setProducts ] = useState<TProduct[]>([]);
  const [ ListResultSearch, setListResultSearch ] = useState<TProduct[]>([]);
  const [ searchLine, setSearchLine ] = useState('');

  const isShowResultSearch = searchLine.length >= START_SEARCH_TERM && ListResultSearch.length > 0;

  useEffect(() => {
    api.get<TProduct[]>(`${ReqPath.getProducts}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const findProducts = (productList: TProduct[], searchTerm: string) => {
    if(!searchTerm) {
      return [];
    }
    return productList.filter(({ name }) => name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  };

  useEffect(() => {
    let isMounted = true;

    if(isMounted) {
      const filteredCards = findProducts(products, searchLine);
      setListResultSearch(filteredCards);
    }

    return () => {
      isMounted = false;
    };

  }, [ products, searchLine ]);


  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchLine(evt.target.value);
  };

  return (
    <>
      <form>
        <label>
          <svg
            className="form-search__icon"
            width={16}
            height={16}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-lens" />
          </svg>
          <input
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            value={searchLine}
            onChange={handleInputChange}
          />
        </label>
        { isShowResultSearch && (
          <ul
            className="form-search__select-list"
            style={{
              visibility: 'visible',
              opacity: '100'
            }}
          >
            {ListResultSearch.map((product) => (
              <SearchComponent
                key={product.id}
                product={product}
                productId={product.id}
              />))}
          </ul>
        )}
      </form>
      <button className="form-search__reset" type="reset">
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </>
  );
}

export { Search };
