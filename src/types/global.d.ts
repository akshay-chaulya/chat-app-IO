
interface Message {
    id: string;
    text: string;
    senderId: string;
    createdAt: string;
}

type CustomSocket = Omit<Socket, 'receiveBuffer' | 'otherReadonlyProperty'>