
import {
    GQL_GetActiveCustomer,
} from '$houdini'
import { json, redirect } from '@sveltejs/kit';

export const load = async (event) => {
    const { data } = await GQL_GetActiveCustomer.fetch({ event })
    const activeCustomer = data?.activeCustomer;

    if (!activeCustomer) {
        throw redirect(307, '/sign-in');
    }

    return { activeCustomer };
}