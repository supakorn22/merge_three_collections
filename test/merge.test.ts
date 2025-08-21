import { merge } from "../src/merge";
jest.setTimeout(1000);

describe("merge()", () => {

    it("merges simple arrays", () => {
        expect(merge([1, 4, 10], [9, 3, 1], [2, 8]))
            .toEqual([1, 1, 2, 3, 4, 8, 9, 10]);
    });

    it("additional cases simple arrays", () => {
        const collection_1 = [0, 2, 5, 7];
        const collection_2 = [9, 6, 3, 1, 0];
        const collection_3 = [1, 4, 8];
        expect(merge(collection_1, collection_2, collection_3))
            .toEqual([0, 0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("handles duplicates", () => {
        expect(merge([1,1,2], [5,5,5], [3,3,4])).toEqual([1,1,2,3,3,4,5,5,5]);
    });

    it("handles empty arrays", () => {
        expect(merge([], [], [])).toEqual([]);
    });

    it("merges when collection_1 and collection_3 are empty", () => {
        expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
    });

    it("merges when collection_3 is empty", () => {
        expect(merge([0, 2, 4], [7, 5, 3, 1], [])).toEqual([0, 1, 2, 3, 4, 5, 7]);
    });

    it("merges when collection_1 is empty", () => {
        expect(merge([], [6, 4, 2], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});