const toSearchString = (searchParams: Record<string, string> = {}): string => {
    return Object.keys(searchParams)
        .map((key) => `${key}=${encodeURIComponent(searchParams[key])}`)
        .join('&');
};

export const createMailtoLink = (
    email: string,
    headers?: Record<string, string>,
): string => {
    let link = `mailto:${email}`;
    if (headers) {
        link += `?${toSearchString(headers)}`;
    }
    return link;
};
