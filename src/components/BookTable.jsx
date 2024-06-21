import React, { useState } from 'react';

function BookTable() {
  const [selectedDate, setSelectedDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const getNextSixDays = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 8; hour <= 20; hour++) {
      timeSlots.push(`${hour}:00`);
    }
    return timeSlots;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmBooking = () => {
    // Implement booking confirmation logic here
    const bookingDetails = { selectedDate, numberOfGuests, timeSlot };
    console.log('Booking confirmed:', bookingDetails);
    // Optionally redirect or display a success message
    alert('Booking confirmed');
  };

  return (
    <div className="book-table p-4">
      <h2 className="text-2xl font-bold mb-4">Book a Table</h2>
      {!showConfirmation ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label htmlFor="date" className="block text-lg font-medium">Select Date</label>
              <select
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>Select a date</option>
                {getNextSixDays().map((date) => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="guests" className="block text-lg font-medium">Number of Guests</label>
              <select
                id="guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>Select number of guests</option>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="time" className="block text-lg font-medium">Select Time</label>
              <select
                id="time"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>Select a time slot</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Select a Time Slot</h3>
            <div className="grid grid-cols-3 gap-4">
              {generateTimeSlots().map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTimeSlot(slot)}
                  className={`py-2 px-4 border rounded-md ${timeSlot === slot ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Offers</h3>
            <p className="bg-yellow-100 p-2 rounded-md">Get 10% off on your first booking!</p>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </form>
      ) : (
        <div className="confirm-booking p-4">
          <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>
          <div className="booking-details mb-4">
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Number of Guests:</strong> {numberOfGuests}</p>
            <p><strong>Time Slot:</strong> {timeSlot}</p>
          </div>
          <div className="terms-and-conditions mb-4">
            <h3 className="text-lg font-bold mb-2">Terms and Conditions</h3>
            <p>Please read and accept our terms and conditions before confirming your booking.</p>
            {/* Add your terms and conditions text here */}
          </div>
          <button
            onClick={handleConfirmBooking}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default BookTable;
