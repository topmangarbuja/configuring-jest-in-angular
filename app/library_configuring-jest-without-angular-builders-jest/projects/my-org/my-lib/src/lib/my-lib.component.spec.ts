import { MyLibComponent } from './my-lib.component';
import {render, screen, within} from "@testing-library/angular";

describe('MyLibComponent', () => {
  beforeEach(async () => {
    await render(MyLibComponent, {
      declarations: [MyLibComponent],
    });
  });

  it('should display title', () => {
    const title = screen.getByLabelText('title');
    expect(within(title).getByText('my-lib works!')).toBeInTheDocument();
  });
});
