
type Params = {
    height?: number;
    width?: number;
    scrolled?: boolean;
}

export default function Logo ({ height, width, scrolled }: Params) {
    return (
        <>
            <img
                src={`/${scrolled ? 'logo-black' : 'logo-white'}.png`}
                alt="tc logo"
                height={height || (153 - 100)}
                width={width || (144 - 100)}
            />
        </>
    )
}