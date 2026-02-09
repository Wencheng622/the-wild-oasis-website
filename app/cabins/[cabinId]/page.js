import { getCabin } from "@/app/_lib/data-service";
import { getCabins } from "@/app/_lib/data-service";
import Spinner from "@/app/_components/Spinner";

import Reservation from "@/app/_components/Reservation";
import Cabin from "@/app/_components/Cabin";

// PLACEHOLDER DATA

export async function generateMetadata({ params }) {
  const { cabinId } = params;
  const cabin = await getCabin(cabinId);
  const { name } = cabin;
  return { title: `Cabin ${name}` };
}
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Reservation cabin={cabin} />
      </div>
    </div>
  );
}
