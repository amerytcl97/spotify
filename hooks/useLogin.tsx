import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { generateRandomString } from "../utils/functions";

type useLoginProps = {
  redirect?: string;
};

const SPOTIFY_AUTH_STATE = "spotify_auth_state";

const useLogin = ({
  redirect = "/",
}: useLoginProps): {
  loggedIn: boolean;
  error: string;
  login: () => void;
  logout: () => void;
} => {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const checkLoggedIn = () => {
    return;
  };

  const login = async () => {
    const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID!;
    const redirect_uri: string = process.env.NEXT_PUBLIC_REDIRECT_URL!;

    const state = generateRandomString(16);

    localStorage.setItem(SPOTIFY_AUTH_STATE, state);
    const scope = "user-read-private user-read-email";

    let url = `${process.env.NEXT_PUBLIC_BASE_AUTH_URL}/authorize`;
    const params = {
      response_type: "token",
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
    };
    const searchparams = `?${new URLSearchParams(params).toString()}`;
    // url += "?response_type=token";
    // url += "&client_id=" + encodeURIComponent(client_id);
    // url += "&scope=" + encodeURIComponent(scope);
    // url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    // url += "&state=" + encodeURIComponent(state);
    router.push(url + searchparams);
  };

  const logout = async () => {};

  useEffect(() => {
    const { query } = router;
    if (query.error) {
      setError(query.error as string);
      setLoggedIn(false);
      localStorage.removeItem(SPOTIFY_AUTH_STATE);
    }
    const access_token = window.location.hash.substring(1);
  }, [redirect, router]);

  return { loggedIn, error, login, logout };
};

export default useLogin;
