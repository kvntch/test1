import classnames from 'classnames';

interface props {
    size: string;
    bgColor: string;
    textColor: string;
    children: string;
}

function Button ({size, bgColor, textColor, children}) {
    return (
        <button className={classnames(`w-80 h-12 bg-${bgColor}-500 text-${textColor} rounded-lg hover:bg-${bgColor}-600  text-${textColor} font-bold py-2 px-4 rounded`, {
            "text-xs": size === 'sm',
            "text-xl": size === 'lg',
         })}>
            {children}
        </button>
    )
};

export default Button;