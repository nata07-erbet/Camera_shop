import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { Banner } from './banner';
import { bannersMock } from '../../mocks/banners-mock';

describe('component: BannerOffer', () => {
  it('should render correctly', () => {
    const expectedTestId = 'banner-offer';

    const preparedComponent = withHistory(<Banner banner={bannersMock[0]} />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
