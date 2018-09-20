import React from "react";
import { Link, withRouter } from "react-router-dom";
import registerServiceWorker from '../../registerServiceWorker';
import Button from '@material-ui/core/Button';
import { PieChart, Pie, Sector } from 'recharts';
import TextField from '@material-ui/core/TextField';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            day: false,
            month: false,
            year: false
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
      const data = {};
      let colorIdx = 0;

      const currentDate = new Date;

      this.props.categories.forEach(category => {
        const categoryDate = new Date(category.date);

        if (this.state.day) {
          if (categoryDate.getDay() !== currentDate.getDay()) return;
        } else if (this.state.month) {
          if (categoryDate.getMonth() !== currentDate.getMonth()) return;
        } else if (this.state.year) {
          if (categoryDate.getFullYear() !== currentDate.getFullYear()) return;
        }

        if (data[category.category]) {
          data[category.category].value += 1;
        } else {
          data[category.category] = {
            name: category.category,
            value: 1,
            fill: this.color(colorIdx)
          };
          colorIdx++;
        }
      });

      return Object.values(data);

        // return [{ name: 'Group A', value: 400, fill: '#0088FE' }, { name: 'Group B', value: 300 },
        // { name: 'Group C', value: 300, fill: '#00C49F' }, { name: 'Group D', value: 200, fill: '#FFBB28' }];
    }

    color(idx) {
      const colors = ["#0088FE", "#8884D8", "#00C49F", "#FFBB28"];
      return colors[idx % colors.length];

      // RANDOM COLOR
      // const values = "0123456789ABCDEF";
      // let color = "";
      // for(let i = 0; i < 6; i++) {
      //   color += values[Math.floor(Math.random() * values.length)];
      // }
      // return "#" + color;
    }

    dashboardActive(type) {
      if (this.state[type]) {
        return {
          background: "rgba(188, 195, 227, 1)"
        };
      } else {
        return {};
      }
    }

    render() {
        // const data = [{ name: 'Group A', value: 400, fill: '#0088FE' }, { name: 'Group B', value: 300 },
        // { name: 'Group C', value: 300, fill: '#00C49F' }, { name: 'Group D', value: 200, fill: '#FFBB28' }];

        const renderActiveShape = (props) => {
            const RADIAN = Math.PI / 180;
            const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
                fill, payload, percent, value, name } = props;
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
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${name}`}</text>
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                        {`${(percent * 100).toFixed(2)}%`}
                    </text>
                </g>
            );
        };

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1) < 10 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1;
        const day = currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate();

        return (
            <div className="dashboard">
                <h1>This is the dashboard</h1>
                <br />
                <div className="dashboard-fromto">
                    <form noValidate>
                      <TextField
                        id="date"
                        label="From"
                        type="date"
                        defaultValue={`${year}-${month}-${day}`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                    <Link className="Link" to="/map">
                        <Button variant="outlined" color="secondary" >
                            MAP
                        </Button>
                    </Link>
                    <form noValidate>
                      <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue={`${year}-${month}-${day}`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                </div>
                <div className="dashboard-date">
                    <Button variant="outlined" color="primary"
                    style={this.dashboardActive("day")}
                    onClick={() => this.setState({ day: true, month: false, year: false })}>
                        Day
                    </Button>
                    <Button variant="outlined" color="primary"
                    style={this.dashboardActive("month")}
                    onClick={() => this.setState({ day: false, month: true, year: false })} >
                        Month
                    </Button>
                    <Button variant="outlined" color="primary"
                    style={this.dashboardActive("year")}
                    onClick={() => this.setState({ day: false, month: false, year: true })} >
                        Year
                    </Button>
                </div>
                <div className="dashboard-chart">
                {/* <img src="https://images-cdn.9gag.com/photo/1122177_700b.jpg" alt="" /> */}
                <PieChart width={800} height={600}>
                    <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={this.data()}
                        cx={400}
                        cy={300}
                        // innerRadius={60}
                        outerRadius={200}
                        fill="#8884d8"
                        onMouseEnter={this.onPieEnter}
                        dataKey="value"
                    />
                </PieChart>
                </div>
            </div>
        );
    }
}

export default withRouter(Dashboard);