export function calculateMonthlyPayment(credit: number, monthlyRate: number, monthsCount: number): number {
  if (monthlyRate > 0) {
    return credit * (monthlyRate * Math.pow(1 + monthlyRate, monthsCount)) /
      (Math.pow(1 + monthlyRate, monthsCount) - 1);
  } else {
    return credit / monthsCount;
  }
}
