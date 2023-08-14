
declare global {}

/**============== DESIGN ========================== */

interface BtnProps {
  disabled?: boolean;
  block?: boolean;
  danger?: boolean;
  htmlType?: "button" | "submit" | "reset";
  icon?: ReactNode;
  ghost?: boolean;
  shape?: "circle" | "round" | "default";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  loading?: boolean;
  title: string;
  type?: "default" | "primary" | "link" | "dashed" | "text";
  size?: "large" | "small" | "middle";
}

interface InputProps {
  placeholder?: string;
  label?: string |  ReactNode;
  value?: string;
  onChange?: (e: any) => void;
  onPressEnter?: (e: any) => void;
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  allowClear?: boolean | { clearIcon?: ReactNode };
  defaultValue?: string;
  disabled?: boolean;
  maxLength?: number;
  showCount?: boolean;
  status?: "error" | "warning";
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: "large" | "middle" | "small";
  type?: "search" | "password" | "text" | "textarea";
  autoSize?: boolean | { minRows: number; maxRows: number };
  onSearch?: (value: any, e: any) => void;
  loading?: boolean;
  showLabel?: boolean;
  error?: string;
  labelColor?: "primary" | "secondary";
  required?: boolean;
  inputMode?:
    | "email"
    | "tel"
    | "text"
    | "search"
    | "none"
    | "url"
    | "numeric"
    | "decimal"
    | undefined;
}


interface IhamburgerProps {
  setHamburger?: Dispatch<SetStateAction<boolean>>;
  hamburger: boolean;
}

/** ===================================================================== */

interface IChoice {
  label: string;
  items: any[];
  selected : any
}

interface IShipCost {
  shipCostCase: string;
  price: string;
}

// interface IChoicesProps {
//   colors?: {
//     label: string;
//     items: string[];
//   } | null;

//   sizes?: {
//     label: string;
//     items: string[];
//   } | null;

//   others?: IChoice[];
// }

interface IDiscountData {
  min : number;
  max ?: number;
  price: number;
}

interface IRaterData {
  data: { [id: string]: { value: number; color: string } };
  total: number;
  average: number;
}

type TPaymentMethodImgUrl = string;

interface IDescription {
  key?: string;
  value: string;
}

interface IReviewCardProps {
  avatarUrl: string;
  name: string;
  job?: string;
  review: string;
  rate: number;
}

interface IGalleryProps {
  productUrl: string;
  gallery: string[];
  rateData: IRaterData;
}

interface IPurchaseInfoProps {
  shipCosts: IShipCost[];
  paymentMethods: TPaymentMethodImgUrl[];
  setQuantity : Dispatch<SetStateAction<number>>
  othersInfo: {
    deliveryTime: string;
    deliveryZone: string | string[];
    refunds: "Eligible" | "Not Eligible";
    availability: boolean;
    minOrder: number;
  };
}

interface IDescription {
  key?: string;
  value: string;
}

interface IDescriptionProps {
  descriptions: IDescription[];
}

interface IReviewsProps {
  reviews: IReviewCardProps[];
}