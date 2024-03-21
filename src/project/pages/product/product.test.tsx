import { render, screen, waitFor } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { withHistory } from '../../utils/mock-component/mock-component';
import { Product } from './product';
import { ReqPath } from '../../const/const';
import { TGetRewiew, TProduct } from '../../types';
import axios, { AxiosResponse } from 'axios';
import { productsMocks } from '../../mocks/products-mock';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<object>('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ productId: '1' }),
  };
});

vi.mock('axios');

describe('Component: Product', () => {
  beforeEach(() => {
    (axios.get as Mock).mockImplementation((path: string) => {
      if (path.includes(`${ReqPath.getProducts}/1`)) {
        return Promise.resolve<AxiosResponse<TProduct>>({
          data: productsMocks[0],
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {}
        });
      }

      if (path.includes(`${ReqPath.getProducts}/1${ReqPath.getRewiews}`)) {
        return Promise.resolve<AxiosResponse<TGetRewiew[]>>({
          data: [],
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {}
        });
      }

      if (path.includes(`${ReqPath.getProducts}/1${ReqPath.getSimilar}`)) {
        return Promise.resolve<AxiosResponse<TProduct[]>>({
          data: [],
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {}
        });
      }
    });
  });

  it('should render correctly', async () => {
    render(withHistory(<Product/>));

    await waitFor(() => expect(screen.getByTestId('product-name')).toBeInTheDocument());
  });
});
