import { GoogleAuth } from "google-auth-library";

const GCS_HOSTNAME = "storage.googleapis.com";

export const getAuthHeaders = async (url: string): Promise<HeadersInit> => {
  if (
    !process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    !url.includes(GCS_HOSTNAME)
  ) {
    return {};
  }

  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/devstorage.read_only",
  });
  const token = await auth.getAccessToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
