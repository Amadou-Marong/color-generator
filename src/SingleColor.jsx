import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
    const {hex, weight} = color
    const copyToClipboard = async () => {
        if(navigator.clipboard){
            try{
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success('Copied to clipboard')
            }catch(error){
                toast.error('Copy to clipboard failed')
            }
        } else{
            toast.error('Copy to clipboard not supported')
        }
    }
  return (
    <article
        onClick={copyToClipboard} 
        className={ index > 10 ? 'color color-light' : 'color'} 
        style={{background: `#${hex}`}}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
