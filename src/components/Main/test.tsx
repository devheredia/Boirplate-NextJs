import { render, screen } from "@testing-library/jest-dom";

import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    const {container} = render(<Main />)

    expect(
      screen.getByRole("heading", { name: /react avançado/i })
    ).toBeInTheDocument()

  expect(container.firstChild).toMatchSnapshot()

    }
  })
})
