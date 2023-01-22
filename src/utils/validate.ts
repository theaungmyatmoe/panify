import {Luhn} from "@amm834/luhn";

export function validate(pan: number | string): boolean {
    return Luhn.validate(+pan);
}