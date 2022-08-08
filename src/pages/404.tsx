import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

const ErrorPage = () => {
  const Router: NextRouter = useRouter();

  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  }, [Router]);

  return (
    <div className="flex justify-center text-center min-h-screen items-center flex-col">
      <Image src="/img/void.svg" width="290px" height="270px" alt="404 Image" />
      <h1 className="font-bold mt-3 text-xl">
        Maaf, halaman yang anda tuju tidak ditemukan
      </h1>
    </div>
  );
};

export default ErrorPage;
