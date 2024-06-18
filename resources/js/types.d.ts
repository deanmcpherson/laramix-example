import { AxiosResponse } from "axios"

declare namespace laramix {

    type action = (payload: any) => AxiosResponse<any>

    interface route {
        component: string,
        props?: any,
        actions?: {
            [key: string]: action
        }
    }

    interface index extends route {
            props: {
                name: string
            },
            actions: {
                alert: action
            }

    }
}
