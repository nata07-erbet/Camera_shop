type TProductPreview = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  price: number;
  previewImgWebp2x: string;
  rating: number;
  reviewCount: number;
}

type TProduct = TProductPreview & {
  vendorCode: string;
  type: 'Коллекционная'|'Моментальная'|'Цифровая'|'Плёночная';
  category: 'Видеокамера' |'Фотоаппарат';
  description: string;
  level: 'Нулевой' | 'Любительский' | 'Профессиональный';
}

type TBanner = Omit <TProductPreview , 'price' | 'rating' | 'reviewCount' >;

type TProductLocalStorage = {
  count: number;
  id: number;
  product: TProduct;
}

export type { TProduct, TBanner, TProductLocalStorage };
