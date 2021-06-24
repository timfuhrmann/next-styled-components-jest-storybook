import React from "react";
import { Button } from "./Button";
import { render, screen } from "../../../test-utils";

describe("Button", () => {
    it("should render children", () => {
        render(<Button>Test</Button>);

        const children = screen.getByText("Test");

        expect(children).toBeInTheDocument();
    });
});
