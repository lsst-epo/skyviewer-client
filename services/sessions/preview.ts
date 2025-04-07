import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies, draftMode } from "next/headers";

const previewSession = () => {
  const cookieSettings: Partial<ResponseCookie> = {
    httpOnly: true,
    sameSite: true,
    secure: true,
  };
  const tokenCookie = "previewToken";

  const draft = () => {
    try {
      return draftMode().isEnabled;
    } catch {
      return false;
    }
  };

  const start = ({ previewToken }: { previewToken?: string }) => {
    draftMode().enable();

    if (previewToken) {
      cookies().set(tokenCookie, previewToken, cookieSettings);
    }
  };
  const end = () => {
    draftMode().disable();
    cookies().delete(tokenCookie);
  };
  const token = () => {
    if (draft()) {
      return cookies().get(tokenCookie)?.value;
    }
  };

  return { start, end, token };
};

export default previewSession;
