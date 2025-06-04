export interface GetProductsModel {
  products: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    rating: number;
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerEmail: string;
      reviewerName: string;
    }[];
  }[];
}
