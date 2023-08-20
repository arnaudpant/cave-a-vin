import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import TestComponent from '../src/components/TestComponent';

test('Test 1', () => {
    render(<TestComponent />);
    const test = screen.getByRole('button', {name: 'hello'})
    expect(test).toHaveTextContent('hello')
    screen.debug()
})