export interface CalculatorInputModel {
    label: string;
    placeholder: number | null;
    value?: number | null;
    role?: string;
    possiblePlaces?: number[];
}