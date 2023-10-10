export default interface NFTType {
  id: string;
  image: string;
  title: string;
  description: string;
  status: "Collection" | "Individual";
  badge: string;
  priceStart: number | null;
  priceEnd: number | null;
  price: number | null;
}
