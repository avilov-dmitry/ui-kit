type ParamsType = {
    progress: number;
};

export const getBackground = ({ progress }: ParamsType) => {
    const active = '#42A3FF';
    const inactive = '#323742';

    return `linear-gradient(90deg, ${active} 0% ${progress}%, ${inactive} ${progress}% 100%)`;
};
