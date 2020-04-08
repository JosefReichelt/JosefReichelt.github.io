export const calculateAge = (date: Date): number => {
    const diff = Date.now() - date.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
};