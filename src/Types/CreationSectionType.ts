import { ChangeEvent } from "react"

export type CreationSectionType = {
    changeTitle: (e: ChangeEvent<HTMLInputElement>) => void,
    changeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    click: () => void
}