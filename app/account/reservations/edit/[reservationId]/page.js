import { getBooking } from "@/app/_lib/data-service";
import { getCabin } from "@/app/_lib/data-service";

import EditReservationForm from "./EditReservationForm";
export default async function Page({ params }) {
  // CHANGE
  const { reservationId } = params;
  const { cabinId, id, numGuests } = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <EditReservationForm maxCapacity={maxCapacity} id={id} />
    </div>
  );
}
