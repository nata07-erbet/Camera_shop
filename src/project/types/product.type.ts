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
  id: number;
  name: string;
  vendorCode: string;
  type: 'Коллекционная'|'Моментальная'|'Цифровая'|'Плёночная';
  category: 'Видеокамера' |'Фотоаппарат';
  description: string;
  previewImg: string;
  level: 'Нулевой' | 'Любительский' | 'Профессиональный';
  price: number;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
  rating: number;
  reviewCount: number;
  count: number;
}

export type { TProduct, TBanner, TProductLocalStorage };
