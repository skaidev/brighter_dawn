import { IEvent } from "interface/event.interface";
import { atom } from "recoil";

export const EventAtom = atom({
    key:'EventAtom',
    default: null as unknown as IEvent
})

export const EventsAtom = atom({
    key: 'EventsAtom',
    default: [] as IEvent[]
})