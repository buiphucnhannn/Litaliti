"use client";

import { createContext, useCallback, useContext, useState } from "react";
import BookingModal from "@/components/booking/BookingModal";

const BookingContext = createContext({ openBooking: () => {} });

// One booking modal for the whole page: any button can open it with a room and/or package preselected
export default function BookingProvider({ children }) {
  const [booking, setBooking] = useState(null);

  const openBooking = useCallback((preset = {}) => setBooking({ ...preset, at: Date.now() }), []);
  const closeBooking = useCallback(() => setBooking(null), []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {booking && (
        <BookingModal
          // Fresh form state for every opening
          key={booking.at}
          onClose={closeBooking}
          initialRoomId={booking.roomId}
          initialPackageId={booking.packageId}
        />
      )}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
