import React from "react";
import { Button } from "./Button";

export default {
    title: "Atom/Button",
    component: Button,
};

export const Primary = () => <Button>Button</Button>;

export const Secondary = () => <Button isSecondary>Button</Button>;
