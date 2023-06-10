// Model for data.
export interface Jogador {
  readonly _id: string;
  readonly phoneNumber: string;
  readonly email: string;
  name: string;
  ranking: string;
  positionRanking: number;
  urlImageFriendly: string;
}
