export interface CalcSidebarConstItem {
  label: string;
  value: number;
  disabled: boolean;
}

export interface CalcSidebarConstModel {
    commPercent: CalcSidebarConstItem;
    taxesPercent: CalcSidebarConstItem;
    eurToBgn: CalcSidebarConstItem;
}