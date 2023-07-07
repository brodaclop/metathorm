interface List<K extends string, V extends { name: K }> {
    get: (name: K) => V;
    list: () => Array<V>;
}

export const createList = <K extends string, V extends { name: K }>(input: Record<K, Omit<V, 'name'>>): List<K, V> => {
    return {
        get: (name: K) => ({ name, ...input[name] }) as unknown as V,
        list: () => Object.entries(input).map(([name, value]) => ({ name, ...value as Omit<K, 'name'> })) as unknown as Array<V>,
    }
}

export const keys = <K extends string, V>(rec: Partial<Record<K, V>>): Array<K> => Object.keys(rec) as Array<K>;
export const entries = <K extends string, V>(rec: Partial<Record<K, V>>): Array<[K, V]> => Object.entries(rec) as Array<[K, V]>;

export const group = <K extends string, V>(input: Array<V>, groupFn: (ob: V) => K): Record<K, Array<V>> => input.reduce((acc, curr) => {
    const key = groupFn(curr);
    acc[key] = [...(acc[key] ?? []), curr];
    return acc;
}, {} as Record<K, Array<V>>);