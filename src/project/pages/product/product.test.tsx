import { render, screen, waitFor } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { withHistory } from '../../utils/mock-component/mock-component';
import { Product } from './product';
import { ReqPath } from '../../const/const';
import { TRewiew, TProduct } from '../../types';
import { AxiosResponse } from 'axios';
import { productsMocks } from '../../mocks/products-mock';
import { api } from '../../services';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<object>('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ productId: '1' }),
  };
});

vi.mock('../../services', async () => {
  const actual = await vi.importActual<object>('../../services');
  return {
    ...actual,
    api: {
      ...(actual as { api: object }).api,
      get: vi.fn(),}
  };
});

describe('Component: Product', () => {
  beforeEach(() => {
    (api.get as Mock).mockImplementation((path: string) => {
      if (path === ReqPath.getProducts) {
        return Promise.resolve<AxiosResponse<TProduct[]>>({
          data: productsMocks,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {}
        });
      }

      if (path === `${ReqPath.getProducts}/1`) {
        return Promise.resolve<AxiosResponse<TProduct>>({
          data: productsMocks[0],
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {}
        });
      }

      if (path === `${ReqPath.getProducts}/1${ReqPath.getRewiews}`) {
        return Promise.resolve<AxiosResponse<TRewiew[]>>({
          data: [],
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {}
        });
      }

      if (path === `${ReqPath.getProducts}/1${ReqPath.getSimilar}`) {
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
