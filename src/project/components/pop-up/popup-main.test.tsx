import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopUpMain } from './index';

describe('component: PopUpMain', () => {
  it('should render correctly', () => {
    const expectedData = 'modal-window';
    const preparedComponent = withHistory(<PopUpMain />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedData)).toBeInTheDocument();
  });
});
