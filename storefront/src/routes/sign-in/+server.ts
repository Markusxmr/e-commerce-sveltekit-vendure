import { GQL_Login } from '$houdini'
import { error, json } from '@sveltejs/kit';

export async function POST({ request }) {
    try {
        const body = await request.json();
        const data = await GQL_Login.mutate({
            email: body?.email,
            password: body?.password,
            rememberMe: body?.rememberMe
        });

        if (!data?.login) {
            throw error(401, "Wrong identifier or password");
        }

        if (data?.login?.__typename === 'CurrentUser') {
            return json({ activeCustomer: data?.login }, { status: 200 });
        } else {
            throw error(401, "Wrong identifier or password");
        }

    } catch (err: any) {
        throw error(401, err);
    }
}