export function GenerateSlugName (title:string, rating:number){
    let slug:string = "";
    const firstSpaceIndex = title.indexOf(" ");

    if (firstSpaceIndex === -1){
        slug = slug + title
    }else {
        slug = slug + title.substring(0,firstSpaceIndex)
    }

    slug = slug + "-" + rating

    return slug
}