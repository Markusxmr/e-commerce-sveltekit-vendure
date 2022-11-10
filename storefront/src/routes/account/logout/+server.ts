import { GQL_Logout } from '$houdini'
import { error, redirect } from '@sveltejs/kit';

export async function POST(event) {
    const data = await GQL_Logout.mutate({ event });

    if (data?.logut?.success === true) {
        throw redirect(307, '/');
    }

    throw error(401, 'Logout not successful');

}