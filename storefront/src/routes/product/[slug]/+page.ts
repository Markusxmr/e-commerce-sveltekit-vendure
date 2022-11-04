
import {
    GQL_GetProductDetail,
    type GetProductDetail$input,
} from '$houdini'
import type { Load } from './__types/[slug]'

export const load: Load<
    {},
    { variables: GetProductDetail$input }
> = async event => {
    const { slug } = event.params
    const variables = { slug }

    await GQL_GetProductDetail.fetch({ event, variables })

    return {}
}