export default function getDate(stringDate: string) {
    const date = new Date(stringDate);

    return date.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })
}