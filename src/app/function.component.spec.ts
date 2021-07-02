import { addition } from "./function.component";

describe('test addition', () => {
    it('testing addition', () => {
        expect(addition(2, 3)).toBe(5)
    })
    it("a=b", () => {
        let a = {
            data: 10
        }
        let b = {
            data: 10
        }
        expect(a).toEqual(b)
    })
})