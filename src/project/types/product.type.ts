type TProduct ={
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  previewImg: string;
  level: string;
  price: number;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
  rating: number;
  reviewCount: number;
}

type TProducts = TProduct[];

export type { TProducts };
