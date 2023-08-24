import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import BottleSearch from "../src/components/BottleSearch";

test('Formulaire de recherche de bouteilles', () => {
    const data = {
        "bottles": [
            {
                "id": "011",
                "type": "rouge",
                "domaine": "Cuvée JB Rivot",
                "aoc": "bourgogne",
                "millesime": 2021,
                "achat": 2022
            },
            {
                "id": "012",
                "type": "rouge",
                "domaine": "Cuvée JB Rivot",
                "aoc": "bourgogne",
                "millesime": 2021,
                "achat": 2022
            }]
    }

    let submitedBottle
    const handleSubmit = (bottle) => {
        submitedBottle = bottle
    }
    // render(<BottleSearch racksUserConnect={data} />)
})