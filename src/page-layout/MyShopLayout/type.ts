export default interface ApiData {
  item: {
    startsAt: string;
    workhour: number;
    hourlyPay: number;
    closed: boolean;
    id: string;
    shop: {
      item: {
        address1: string;
        imageUrl: string;
        name: string;
        originalHourlyPay: number;
      };
    };
  };
}
