import { fetchAuthUserAction } from "@/action";


export default async function Home() {

  const currentUser = await fetchAuthUserAction();

  console.log(currentUser);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h2 className="mx-7">NextJs Authencation </h2>
    <p>{currentUser?.data?.userName}</p>
    <p>{currentUser?.data?.email}</p>
    <p>{currentUser?.data?.password}</p>
    </div>
  );
}
