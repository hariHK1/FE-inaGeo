
export default function Searching(data, input, key) {
    input = input.map(t => t.toLowerCase());
    return data?.filter((a) => {
        return input.every((t) => {
            return key.some((f) => {
                return a[f]?.toLowerCase().indexOf(t) !== -1;
            });
        });
    });
}