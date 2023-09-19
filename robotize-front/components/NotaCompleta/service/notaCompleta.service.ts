
export const contentCompletee = (tags:string[], content: string) => {
    for (let tag of tags) {
        if (content.includes(tag)) {
            const tag_url = tag.replace(' ', '-')
            content = content.split(tag).join(`<a href='/tags/${tag_url}' class='border-b-4 border-[#441eae]'>${tag}</a>`);
        }
    }
    return content
}