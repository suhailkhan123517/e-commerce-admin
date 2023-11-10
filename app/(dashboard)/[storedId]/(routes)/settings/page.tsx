import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import SettingsForm from "./components/SettingsForm";
import prismadb from "@/lib/prismadb";

const SettingPage = async ({ params }: { params: { storedId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storedId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }
  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SettingsForm initialData={store} />
        </div>
      </div>
    </>
  );
};

export default SettingPage;
