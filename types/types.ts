export interface IPlattform {
  id: number;
  name: string;
  icon: string;
}

export interface IPlattformEntryProps {
  key: number;
  icon: string;
  name: string;
}

export interface IShowMenuProps {
  isOpen: boolean;
}
