import { lazyLoad } from "@/lib/utils"
import { type RouteObject } from "react-router-dom"

export const routes:RouteObject[] = [
    {
        path: "/",
        lazy: lazyLoad(import("@/components/layout/protected.layout")),
    }
]