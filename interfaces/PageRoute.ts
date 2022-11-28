import { ReactElement, ReactNode } from "react";

export interface PageRoute {
    icon?: ReactElement | ReactNode;
    url: string;
    name: string;
}