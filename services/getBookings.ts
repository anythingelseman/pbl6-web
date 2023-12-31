import apiClient from "./api";

export async function getBookings(customerId: number) {
  const resp = await apiClient.get(
    `/v1/booking/customer?CustomerId=${customerId}&IsExport=true`,
  );

  return resp.data.data;
}
