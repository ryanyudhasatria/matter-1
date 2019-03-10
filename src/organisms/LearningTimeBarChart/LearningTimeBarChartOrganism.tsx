import * as d3 from "d3";
import { css, cx } from "emotion";
import * as moment_ from "moment";
import * as React from "react";

// @ts-ignore
import COLORS from "../../constants/colors";

const moment = moment_; // issue on https://github.com/jvandemo/generator-angular2-library/issues/221

interface IBarData {
  date: string;
  duration: number;
}

interface IProps {
  id: string;
  type: string; // SMALL, MEDIUM, LARGE (small requires small dataset, large requires larger)
  data: IBarData[];
  width: number;
  height: number;
  className?: string;
}

class LearningTimeBarChartOrganism extends React.Component<IProps, any> {
  public componentDidMount() {
    const svg = d3
      .select(`#${this.props.id || "svgWrapper"}`)
      .append("svg")
      .attr("class", "barChartSvg")
      .style("width", this.props.width)
      .style("height", this.props.height)
      .style("background-color", "transparent")
      .style("padding", 0);
    const dataset: IBarData[] = this.props.data;

    const barPaddings = {
      SMALL: 10,
      MEDIUM: 5,
      LARGE: 1,
    };

    const barTransitionDelays = {
      SMALL: 150,
      MEDIUM: 80,
      LARGE: 50,
    };

    const barPadding = barPaddings[this.props.type];
    const barTransitionDelay = barTransitionDelays[this.props.type];
    const svgWidth = this.props.width;
    const svgHeight = this.props.height;
    const svgTopOffset = 40;
    const maxBarHeight = svgHeight - svgTopOffset;
    const numberOfBars = dataset.length;
    const customElasticEasing = d3.easeElastic.period(1);
    const durations: number[] = dataset.map((item: IBarData) => item.duration);

    const yScale = d3
      .scaleLinear()
      // @ts-ignore
      .domain([0, d3.max(durations)])
      .range([svgHeight, svgTopOffset]);

    const barGroup = svg
      .selectAll("g")
      .data(dataset)
      .enter()
      .append("g")
      .attr("class", (d, i) => `bar-group-${i}`);

    barGroup
      .append("rect")
      .attr("class", (d, i) => `bar-group-contain-${i}`)
      .attr("fill", "transparent")
      .attr("stroke", "transparent")
      .attr("stroke-width", 1)
      .attr("width", svgWidth / numberOfBars - barPadding)
      .attr("x", (d, i) => (svgWidth / numberOfBars) * i + barPadding)
      .attr("height", maxBarHeight)
      .attr("y", 0);

    barGroup
      .append("rect")
      .attr("class", (d, i) => `bar-group-item-${i}`)
      .attr("fill", COLORS.PURPLE.NORMAL)
      .attr("width", svgWidth / numberOfBars - barPadding)
      .attr("x", (d, i) => (svgWidth / numberOfBars) * i + barPadding)
      .attr("height", 0)
      .attr("y", maxBarHeight)
      .transition()
      .duration(1000)
      .ease(customElasticEasing)
      .delay((d, i) => i * barTransitionDelay)
      .attr("height", (d: IBarData) => svgHeight - yScale(d.duration))
      .attr("y", (d: IBarData) => yScale(d.duration) - 20);

    barGroup
      .append("text")
      .attr("fill", "rgba(0, 0, 0, 0.5)")
      .attr("font-size", 10)
      .attr("class", "fw6")
      .text(this.renderYAxisText)
      .attr("x", (d, i) => (svgWidth / numberOfBars) * i + barPadding * 2)
      .attr("text-anchor", "center")
      .attr("y", maxBarHeight)
      .transition()
      .duration(1000)
      .delay((d, i) => i * barTransitionDelay)
      .ease(customElasticEasing)
      .attr("y", (d) => yScale(d.duration) - 25);

    barGroup
      .append("text")
      .attr("fill", "rgba(0, 0, 0, 0.5)")
      .attr("font-size", 10)
      .attr("class", (d, i) => `bar-group-x-label-${i} fw4`)
      .text(this.renderXAxisText)
      .attr("x", (d, i) => (svgWidth / numberOfBars) * i + barPadding * 2)
      .attr("y", svgHeight - 7);

    const barGroupBack = barGroup
      .append("rect")
      .attr("class", (d, i) => `bar-group-back bar-group-background-${i}`)
      .attr("opacity", 0)
      .attr("fill", "transparent")
      .attr("width", svgWidth / numberOfBars + 5)
      .attr(
        "x",
        (d, i) => (svgWidth / numberOfBars) * i + barPadding - numberOfBars / 2,
      )
      .attr("height", maxBarHeight + numberOfBars)
      .attr("y", -numberOfBars);

    barGroupBack.on("mouseenter", (d, i) => {
      svg.select(`.bar-group-item-${i}`).attr("fill", COLORS.PURPLE.LIGHT);
      svg
        .select(`.bar-group-x-label-${i}`)
        .attr("class", `.bar-group-x-label-${i}`);
    });

    barGroupBack.on("mouseleave", (d, i) => {
      svg.select(`.bar-group-item-${i}`).attr("fill", COLORS.PURPLE.NORMAL);
      svg
        .select(`.bar-group-x-label-${i}`)
        .attr("class", `.bar-group-x-label-${i}`);
    });

    // const yAxis = d3
    //   .axisLeft(yScale)
    //   // @ts-ignore
    //   .ticks(d3.max(durations) / durations.length)

    // svg.append('g')
    //   .attr('class', 'y axis')
    //   .call(yAxis);

    // d3.select('.y.axis').select('.domain').attr('stroke', 'rgba(255, 255, 255, 1)');
    // const axisTicks = d3.select('.y.axis').selectAll('.tick');
    // axisTicks.select('line')
    //   .attr('stroke', 'rgba(0, 0, 0, 0.5)')
    //   .attr('x2', svgWidth + 50);
    // axisTicks.select('text').attr('fill', '#FFFFFF').style('font-size', 16);

    // svg.append('text')
    //   .attr('x', 20)
    //   .attr('y', 20)
    //   .text('Duration')
    //   .attr('fill', 'rgba(0, 0, 0, 0.8)')
    //   .style('font-size', 16)
    //   .style('font-weight', 600);

    svg
      .append("line")
      .attr("stroke", "rgba(0, 0, 0, 0.3)")
      .attr("stroke-width", 1)
      .attr("x1", 0.5)
      .attr("x2", svgWidth + 20)
      .attr("y1", svgHeight - 20)
      .attr("y2", svgHeight - 20);

    // svg.append('line')
    //   .attr('stroke', 'rgba(0, 0, 0, 0.3)')
    //   .attr('stroke-width', 1)
    //   .attr('x1', 0.5)
    //   .attr('x2', 0.5)
    //   .attr('y1', svgHeight)
    //   .attr('y2', 0);
  }

  public renderYAxisText = (d: IBarData) => {
    if (this.props.type === "SMALL") {
      return `${Math.ceil(d.duration / 60)} menit`;
    }
    if (this.props.type === "MEDIUM") { return `${Math.ceil(d.duration / 60)}m`; }
    if (this.props.type === "LARGE") { return `${Math.ceil(d.duration / 60)}`; }
    return `${Math.ceil(d.duration / 60)} menit`;
  }

  public renderXAxisText = (d: IBarData) => {
    if (this.props.type === "SMALL") { return moment(d.date).format("D MMM"); }
    if (this.props.type === "MEDIUM") { return moment(d.date).format("D"); }
    if (this.props.type === "LARGE") { return moment(d.date).format("D"); }
    return moment(d.date).format("D MMM");
  }

  public render() {
    const { id, className, width, height } = this.props;
    return (
      <div
        key={`learning-bar-${id}`}
        id={id || "svgWrapper"}
        className={cx(
          css`
            height: ${height + 50}px;
            width: ${width + 50}px;
          `,
          className,
        )}
      />
    );
  }
}

export { LearningTimeBarChartOrganism };
