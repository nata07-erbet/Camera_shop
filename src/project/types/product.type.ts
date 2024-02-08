type TRating = {
  rating: 0 | 1 | 2 | 3 | 4 | 5 ;
}

type TProductPreview = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  price: number;
  previewImgWebp2x: string;
  rating: TRating;
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

export type { TProduct, TBanner, TRating };
