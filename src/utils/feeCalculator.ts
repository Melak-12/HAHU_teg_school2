export function computeTuition(baseFee: number, scholarshipPercent: number = 0): number {
  const discount = (baseFee * scholarshipPercent) / 100;
  return Math.max(0, baseFee - discount);
}
