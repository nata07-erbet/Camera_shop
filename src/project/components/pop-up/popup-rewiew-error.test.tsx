import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PopupRewiewError } from './index';

describe('component: PopupAddRewiew', () => {
  it('should render correctly', () => {
    const expectedText = 'Оставить отзыв';

    const preparedComponent = withHistory(
      <PopupRewiewError/>
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correctly when user enter name, and other comments', async () => {
    const nameId = 'nameElement';
    const positiveId = 'positiveElement';
    const negativeValue = 'negativeElement';
    const commentElement = 'commentElement';

    const expectedNameValue = 'keks';
    const expectedPositiveValue = 'Основные преимущества товара';
    const expectedNegativeValue = 'Главные недостатки товара';
    const expectedCommentElement = 'Поделитесь своим опытом покупки';

    const preparedComponent = withHistory(
      <PopupRewiewError />
    );

    render(preparedComponent);

    await userEvent.type(screen.getByTestId(nameId), expectedNameValue);
    await userEvent.type(screen.getByTestId(positiveId), expectedPositiveValue);
    await userEvent.type(
      screen.getByTestId(negativeValue),
      expectedNegativeValue
    );
    await userEvent.type(
      screen.getByTestId(commentElement),
      expectedCommentElement
    );

    expect(screen.getByDisplayValue(expectedNameValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPositiveValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedNegativeValue)).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(expectedCommentElement)
    ).toBeInTheDocument();
  });
});
