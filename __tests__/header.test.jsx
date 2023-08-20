import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../src/components/Header";

test("devrait afficher le contenu attendu", () => {
    render(<Header />);
    
  });