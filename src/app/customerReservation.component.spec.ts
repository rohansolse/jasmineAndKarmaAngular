import { Reservation } from "./customerReservation.component";

describe('reservation testing', () => {
    let reservation: Reservation
    beforeEach(() => {
        reservation = new Reservation();
    })
    it("test increment reservation", () => {
        expect(reservation.incrementCustomer()).toBe(11)
    })
    it("test decrement reservation", () => {
        expect(reservation.decrementCustomer()).toBe(9)
    })
    it("reservedRoom or not", () => {
        expect(reservation.reserveRoom()).toBeTruthy()
    })
})