import { ChangeEvent, ReactNode } from "react"

export type TextFieldsType = {
    placeholder: string,
    icon: ReactNode,
    change: (e: ChangeEvent<HTMLInputElement>) => void
}