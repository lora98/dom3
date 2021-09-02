
export const setFormNumberState = (setState: (val: number) => void) => (e: any) => {
    const value = Number(e.currentTarget.value);

    setState(value)
}