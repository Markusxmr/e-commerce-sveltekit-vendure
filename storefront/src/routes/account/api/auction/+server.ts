import { json, redirect } from '@sveltejs/kit';
import {
    GQL_Logout,
} from '$houdini'

export async function POST(event) {
    const result = await GQL_Logout({ event });

    return redirect(304, '/');
}