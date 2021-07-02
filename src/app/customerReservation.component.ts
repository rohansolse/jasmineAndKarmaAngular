export class Reservation {
    hotelCapacity = 30;
    customerCount = 10;

    incrementCustomer() {
        return ++this.customerCount;
    }

    decrementCustomer() {
        return --this.customerCount;
    }

    reserveRoom() {
        let reservedRoom = false
        if (this.customerCount < this.hotelCapacity) {
            reservedRoom = true
        }
        return reservedRoom
    }
}