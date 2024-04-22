export default function createQueryParams(parameters: { [key: string]: string | number | undefined }) {
  const queryParams = new URLSearchParams();
  Object.entries(parameters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });
  return queryParams.toString();
}
