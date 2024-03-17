const BASE_URL = "/api";

const fetcher = async (url: string, config?: Parameters<typeof fetch>[1]) => {
  const res = await fetch(`${BASE_URL}${url}`, config);

  if (res.ok) {
    return res.json();
  }
  return res.status;
};

export default fetcher;
