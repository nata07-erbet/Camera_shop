import { render, screen} from '@testing-library/react';
import { withHelmet } from '../../utils/mock-component/mock-component';
import { Banner } from './banner';
import { bannersMock } from '../../mocks/banners-mock';

describe('component: BannerOffer', () => {
  it('should render correctly', () => {
    const expectedText = 'banner-offer';

    const preparedComponent = withHelmet(<Banner banner={bannersMock[0]}/>);

    render(preparedComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});
