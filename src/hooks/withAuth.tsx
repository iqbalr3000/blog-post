import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { notification } from "antd";
import { getToken } from "@/utils";

type WithAuthProps = Record<string, never>;

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthenticatedComponent = (props: P & WithAuthProps) => {
    const router = useRouter();
    const hasNotified = useRef(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
      const token = getToken();

      if (!token && !hasNotified.current) {
        hasNotified.current = true;
        notification.warning({
          message: "Access Denied",
          description: "Please enter your token to proceed.",
          duration: 3
        });

        router.replace("/");
      }
    }, [router]);

    if (!isClient) {
      return null;
    }

    const token = getToken();
    return token ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
