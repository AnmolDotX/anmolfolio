import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


export const client = createClient({
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn : true,
    apiVersion : '2024-05-22',
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source : SanityImageSource) => builder.image(source);