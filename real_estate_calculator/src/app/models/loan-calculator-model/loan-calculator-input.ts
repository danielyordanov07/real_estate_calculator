export interface LoanCalculatorInputModel {
    credit: number | null; // The total amount of the loan
    loanTerm: number | null; // The term of the loan in months
    APR: number | null; // The annual percentage rate (APR) as a percentage
}