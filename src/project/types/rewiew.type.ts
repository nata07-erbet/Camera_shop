type TGetRewiew = {
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
  createAt: string;
  cameraId: number;
}

type TPostRewiew = Omit<TGetRewiew, 'id' | 'createAt'>

export type { TGetRewiew, TPostRewiew };
