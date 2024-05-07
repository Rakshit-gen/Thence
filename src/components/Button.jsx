const Button = ({ label, backgroundColor, borderColor, textColor, hoverColor, link }) => {
    return (
        <button className={`px-7 py-4 text-lg leading-none border font-Manrope rounded-full bg-[${backgroundColor}] text-[${textColor}] border-[${borderColor}] hover:bg-[${hoverColor}]`} >
            <a href={`${link}`}>
                {label}
            </a>
        </button>
    )
}
  
export default Button