export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const n1 = collection_1.length;
    const n2 = collection_2.length;
    const n3 = collection_3.length;

    let i = 0;       // collection_1 (asc)
    let j = n2 - 1;  // collection_2 (desc) -> iterate backwards
    let k = 0;       // collection_3 (asc)

    const merged: number[] = [];

    const peek1 = () => (i < n1 ? collection_1[i] : Number.POSITIVE_INFINITY);
    const peek2 = () => (j >= 0 ? collection_2[j] : Number.POSITIVE_INFINITY);
    const peek3 = () => (k < n3 ? collection_3[k] : Number.POSITIVE_INFINITY);

    while (i < n1 || j >= 0 || k < n3) {
        const v1 = peek1();
        const v2 = peek2();
        const v3 = peek3();

        if (v1 !== Number.POSITIVE_INFINITY && v1 <= v2 && v1 <= v3) {
            merged.push(v1);
            i++;
        } else if (v2 !== Number.POSITIVE_INFINITY && v2 <= v1 && v2 <= v3) {
            merged.push(v2);
            j--;
        } else {
            merged.push(v3);
            k++;
        }
    }

    return merged;
}