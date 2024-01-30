type TProductPreview = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  price: number;
  previewImgWebp2x: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewCount: number;
}

type TProduct = TProductPreview & {
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
}

type TProducts = TProduct[];

export type { TProductPreview, TProduct, TProducts };
