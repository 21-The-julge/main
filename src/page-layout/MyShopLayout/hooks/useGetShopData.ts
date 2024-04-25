import { useInfiniteQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/shared/apis/axiosInstance";

const useGetMessages = () => {
  const getMessages = async (pageParam: number) => {
    const myRegisterResponse = await axiosInstance.get(
      `shops/ae78c3af-a075-4586-bee2-21c8da59d6b2/notices?limit=6&offset=${pageParam}`,
    );

    return {
      count: myRegisterResponse.data.count,
      result: myRegisterResponse.data.items,
      nextPage: pageParam + 6,
      isLast: !myRegisterResponse.data.hasNext,
    };
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["registeredShop"],
    queryFn: ({ pageParam }) => getMessages(pageParam),
    initialPageParam: 0,

    getNextPageParam: (lastPage: { isLast: boolean; nextPage: number }) => {
      if (!lastPage.isLast) {
        return lastPage.nextPage;
      }
      return undefined;
    },
  });

  return { data, fetchNextPage, hasNextPage };
};

export default useGetMessages;
