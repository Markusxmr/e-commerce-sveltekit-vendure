
import {
    CachePolicy,
    GQL_GetProductDetail,
    type GetProductDetail$input,
} from '$houdini'
import type { Load } from './__types/[slug]'
import { error } from '@sveltejs/kit';
// import { sessionStorage } from '~/sessions'

export const load: Load<{ variables }, { variables?: GetProductDetail$input }> = async (event) => {
    const { slug } = event.params
    const variables = { slug }

    const { data } = await GQL_GetProductDetail.fetch({
        event,
        policy: CachePolicy.CacheAndNetwork,
        variables
    })
    const product = data?.product;

    if (!product) {
        throw error(404, 'Not Found');
    }

    return {}

    // const session = await sessionStorage.getSession(
    //     request?.headers.get('Cookie'),
    // );
    // const error = session.get('activeOrderError');
    // return json(
    //     { product: product!, error },
    //     {
    //         headers: {
    //             'Set-Cookie': await sessionStorage.commitSession(session),
    //         },
    //     },
    // );
}