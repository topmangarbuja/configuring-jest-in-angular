import { AppComponent } from './app.component';
import {render, screen} from '@testing-library/angular';
import {within} from "@testing-library/dom";

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent);
  });

  it('should display title', () => {
    const title = screen.getByLabelText('title');
    expect(within(title).getByText('Hello, configuring-jest-without-angular-builders-jest')).toBeInTheDocument();
  });
});
