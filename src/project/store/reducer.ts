import { isNull } from 'util';
import { RequestStatus } from '../const/const';
import {
  TProduct,
  TBanner,
  TRewiew,
  TCoupon,
  TOrder
} from '../types/index';


const initialState: {
  products: TProduct[];
  productsFetchingStatus: RequestStatus;
  product: TProduct | null;
  productFetchingStatus: RequestStatus;
  similarProducts: TProduct[];
  similarProductsFetchingStatus: RequestStatus;
  promoProducts: TBanner[];
  promoProductsFetchingStatus: RequestStatus;
  reviews: TRewiew[];
  reviewsFetchingStatus: RequestStatus;
  reviewsSendingStatus: RequestStatus;
  coupon: TCoupon | null;
  couponSendingStatus: RequestStatus;
  orders: TOrder[];
  ordersSendingStatus: RequestStatus;
} = {
  products: [],
  productsFetchingStatus: RequestStatus.Idle,
  product: null,
  productFetchingStatus: RequestStatus.Idle,
  similarProducts: [],
  similarProductsFetchingStatus: RequestStatus.Idle,
  promoProducts: [],
  promoProductsFetchingStatus: RequestStatus.Idle,
  reviews: [],
  reviewsFetchingStatus: RequestStatus.Idle,
  reviewsSendingStatus: RequestStatus.Idle,
  coupon: null,
  couponSendingStatus: RequestStatus.Idle,
  orders: [];
  ordersSendingStatus: RequestStatus.Idle
};


export { initialState };
