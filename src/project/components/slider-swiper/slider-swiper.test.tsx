import { withHelmet } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { SliderSwiper } from './slider-swiper';
import { bannersMock } from '../../mocks/banners-mock';

describe('component: SliderSwiper', () => {
  it('should render correctly', () => {
    const expectedTestId = 'slider';

    const preparedComponent = withHelmet(<SliderSwiper banners={bannersMock} />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
