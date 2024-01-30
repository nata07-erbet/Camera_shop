type TGetRewiew = {
  id: string;
  createAt: string;
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

type TPostRewiew = Omit<TGetRewiew, 'id' | 'createAt'>

export type { TGetRewiew, TPostRewiew };
