import { withHelmet } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopUp } from './pop-up';

describe('component: ModalWindow', () => {
  it('should render correctly', () => {
    const expectedData = 'modal-window';
    const preparedComponent = withHelmet(<PopUp/>);

    render(preparedComponent);

    expect(screen.getByTestId(expectedData)).toBeInTheDocument();
  });
});
