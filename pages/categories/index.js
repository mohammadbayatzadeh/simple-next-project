import { useRouter } from "next/router";
import { useEffect } from "react";

function index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/cars");
  }, []);
  return <div></div>;
}

export default index;
