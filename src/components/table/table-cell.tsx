import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCell extends ComponentProps<'th'> {}

export function TableCell(props: TableCell){
    return (
        <td {...props} className={twMerge("py-3 px-4 text-sm text-left text-zinc-300", props.className)}></td>
    )
}