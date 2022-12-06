import { DefaultSession } from "next-auth";

export type Placement = "top" | "bottom" | "left" | "right";

export type VerticalPlacement = "top" | "bottom";

export interface MySession extends DefaultSession {

}
