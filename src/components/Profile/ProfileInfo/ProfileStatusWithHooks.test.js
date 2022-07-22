import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

describe("ProfileStatusWithHooks component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatusWithHooks status="Hi im here" />);
    const instance = component.root;
    expect(instance.props.status).toBe("Hi im here");
  });
});