import { ChangeEvent } from "react"

export type ItemType = {
    title: string,
    description: string,
    status: boolean,
    statusChange: (e: ChangeEvent<HTMLInputElement>) => void
}