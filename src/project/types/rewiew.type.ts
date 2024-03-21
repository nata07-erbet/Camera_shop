type TGetRewiew = {
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
  createAt: string;
  cameraId: number;
}

type TPostRewiew = Omit<TGetRewiew, 'id' | 'createAt'>

export type { TGetRewiew, TPostRewiew };
