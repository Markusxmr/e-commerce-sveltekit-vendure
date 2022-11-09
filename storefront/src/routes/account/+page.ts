
import {
    GQL_GetActiveCustomer,
} from '$houdini'
import { json, redirect } from '@sveltejs/kit';

export const load = async (event) => {
    const { data } = await GQL_GetActiveCustomer.fetch({ event })
    const activeCustomer = data?.activeCustomer;

    console.log(activeCustomer);

    if (!activeCustomer) {
        return redirect(304, '/sign-in');
    }
    return json({ activeCustomer });
}