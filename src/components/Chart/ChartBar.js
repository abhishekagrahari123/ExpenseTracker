import './ChartBar.css'

function ChartBar(props){
    let filledHeight = '0%';
    if(props.maxVal > 0) filledHeight = (props.value/props.maxVal)*100 + '%';
    return (<div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height: filledHeight}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>)
}
export default ChartBar;