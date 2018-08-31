import React from "react";
import { Link, withRouter } from "react-router-dom";
import registerServiceWorker from '../../registerServiceWorker';
import Button from '@material-ui/core/Button';
import { PieChart, Pie, Sector } from 'recharts';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
        this.onPieEnter = this.onPieEnter.bind(this);
    }

    componentWillReceiveProps(nextProps) { }

    componentDidMount() {
      registerServiceWorker();
    }

    onPieEnter(data, index) {
        this.setState({
            activeIndex: index,
        });
    }

    data() {
        return [{ name: 'Group A', value: 400, fill: '#0088FE' }, { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300, fill: '#00C49F' }, { name: 'Group D', value: 200, fill: '#FFBB28' }];
    }
    render() {
        // const data = [{ name: 'Group A', value: 400, fill: '#0088FE' }, { name: 'Group B', value: 300 },
        // { name: 'Group C', value: 300, fill: '#00C49F' }, { name: 'Group D', value: 200, fill: '#FFBB28' }];

        const renderActiveShape = (props) => {
            const RADIAN = Math.PI / 180;
            const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
                fill, payload, percent, value } = props;
            const sin = Math.sin(-RADIAN * midAngle);
            const cos = Math.cos(-RADIAN * midAngle);
            const sx = cx + (outerRadius + 10) * cos;
            const sy = cy + (outerRadius + 10) * sin;
            const mx = cx + (outerRadius + 30) * cos;
            const my = cy + (outerRadius + 30) * sin;
            const ex = mx + (cos >= 0 ? 1 : -1) * 22;
            const ey = my;
            const textAnchor = cos >= 0 ? 'start' : 'end';

            return (
                <g>
                    {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>Optional Text</text> */}
                    <Sector
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                    />
                    <Sector
                        cx={cx}
                        cy={cy}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        innerRadius={outerRadius + 6}
                        outerRadius={outerRadius + 10}
                        fill={fill}
                    />
                    <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                    <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                        {`(Rate ${(percent * 100).toFixed(2)}%)`}
                    </text>
                </g>
            );
        };


        return (
            <div className="dashboard">
                <h1>This is the dashboard</h1>
                <br />
                <div className="dashboard-fromto">
                    <Button variant="outlined" color="primary" >
                        From
                    </Button>
                    <Link className="Link" to="/map">
                        <Button variant="outlined" color="secondary" >
                            MAP
                        </Button>
                    </Link>
                    <Button variant="outlined" color="primary" >
                        To
                     </Button>
                </div>
                <div className="dashboard-date">
                    <Button variant="outlined" color="primary" >
                        Day
                    </Button>
                    <Button variant="outlined" color="primary" >
                        Month
                    </Button>
                    <Button variant="outlined" color="primary" >
                        Year
                    </Button>
                </div>
                <div className="dashboard-chart">
                {/* <img src="https://images-cdn.9gag.com/photo/1122177_700b.jpg" alt="" /> */}
                <PieChart width={800} height={400}>
                    <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={this.data()}
                        cx={300}
                        cy={200}
                        // innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        onMouseEnter={this.onPieEnter}
                    />
                </PieChart>
                </div>
            </div>
        );
    }
}

export default withRouter(Dashboard);