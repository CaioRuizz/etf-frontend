export type Ticker = {
  ticker: string,
  type: string,
};

export type Holding = {
  ticker: string,
  share: number,
}

export type Portfolio = {
  ticker: string,
  type: string,
  holdings: Holding[],
  updatedAt: Date,
};
