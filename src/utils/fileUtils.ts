export const isImageUrl = (url: string): boolean => {
    if (!url) return false;
    return /\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i.test(url);
};

export const extractFileName = (url: string, index: number): string => {
    return url.split('/').pop()?.split('?')[0] || `파일 ${index + 1}`;
};
