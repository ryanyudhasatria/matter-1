import * as d3 from "d3";
import { css, cx } from "emotion";
import * as React from "react";

// @ts-ignore
import COLORS from "../../constants/colors";

const chartStyle = css`
  margin: 0 auto;
  position: relative;
  display: block;
`;

const legendStyle = css`
  font-size: 14px;
  color: ${COLORS.GREY.DARKER};
`;

const tooltipStyle = css`
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 0 5px #999999;
  color: #333;
  display: none;
  font-size: 14px;
  left: 130px;
  padding: 10px;
  position: absolute;
  text-align: center;
  top: 95px;
  width: 200px;
  z-index: 10;
`;

const disabledRect = css`
  fill: transparent !important;
`;

// @ts-ignore
import COLORS from "../../constants/colors";

// const moment = moment_; // issue on https://github.com/jvandemo/generator-angular2-library/issues/221

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

class EngagedUserPieChartOrganism extends React.Component<IProps, any> {
  public componentDidMount() {

    // define data
    const dataset: any = this.props.data;

    // chart dimensions
    const width = this.props.width;
    const height = this.props.height;

    // a circle chart needs a radius
    const radius = Math.min(width, height) / 2;

    // legend dimensions
    const legendRectSize = 25; // defines the size of the colored squares in legend
    const legendSpacing = 10; // defines spacing between squares

    // define color scale
    // var color = d3.scaleOrdinal(d3.schemeAccent);
    const color = d3.scaleOrdinal(d3.schemeAccent)
      .domain(["Aktif", "Tidak Aktif", "Pending"])
      .range([COLORS.GREEN.NORMAL, COLORS.RED.NORMAL, COLORS.YELLOW.NORMAL]);

    const svg = d3.select(`#${this.props.id || "svgWrapper"}`) // select element in the DOM with id 'chart'
    .append("svg") // append an svg element to the element we've selected
    .attr("width", width) // set the width of the svg element we just added
    .attr("height", height) // set the height of the svg element we just added
    .append("g") // append 'g' element to the svg element
    // our reference is now to the 'g' element. centerting the 'g' element to the svg element
    .attr("transform", "translate(" + (width / 3) + "," + (height / 2) + ")");

    const arc: any = d3.arc()
    .innerRadius(0) // none for pie chart
    .outerRadius(radius); // size of overall chart

    const pie = d3.pie() // start and end angles of the segments
    .value((d: any) => d.count) // how to extract the numerical data from each entry in our dataset
    .sort(null); // by default, data sorts in oescending value. this will mess with our animation so we set it to null

    // define tooltip
    const tooltip = d3.select(`#${this.props.id || "svgWrapper"}`) // select element in the DOM with id 'chart'
    .append("div") // append a div element to the element we've selected
    .attr("class", tooltipStyle); // add class 'tooltip' on the divs we just selected

    tooltip.append("div") // add divs to the tooltip defined above
    .attr("class", "label"); // add class 'label' on the selection

    tooltip.append("div") // add divs to the tooltip defined above
    .attr("class", "count"); // add class 'count' on the selection

    tooltip.append("div") // add divs to the tooltip defined above
    .attr("class", "percent"); // add class 'percent' on the selection

    dataset.forEach((d: any) => {
      d.count = +d.count; // calculate count as we iterate through the data
      d.enabled = true; // add enabled property to track which entries are checked
    });

    // creating the chart
    // select all path elements inside the svg.
    // specifically the 'g' element. they don't exist yet but they will be created below
    let path = svg.selectAll("path")
    // associate dataset wit he path elements we're about to create.
    // must pass through the pie function.
    // it magically knows how to extract values and bakes it into the pie
    .data(pie(dataset))
    .enter() // creates placeholder nodes for each of the values
    .append("path") // replace placeholders with path elements
    .attr("d", arc) // define d attribute with arc function above
    // use color scale to define fill of each label in dataset
    .attr("fill", (d: any) => color(d.data.label))
    .each(function(d: any) {
      // @ts-ignore
      return this._current - d;
    }); // creates a smooth animation for each track

    // mouse event handlers are attached to path so they need to come after its definition
    path.on("mouseover", (d: any) => {  // when mouse enters div
      const total = d3.sum(dataset.map((dt: any) => { // calculate the total number of tickets in the dataset
      // checking to see if the entry is enabled. if it isn't, we return 0 and cause other percentages to increase
      return (dt.enabled) ? dt.count : 0;
      }));
      const percent = Math.round(1000 * d.data.count / total) / 10; // calculate percent
      tooltip.select(".label").html(d.data.label); // set current label
      tooltip.select(".count").html(`${d.data.count} karyawan`); // set current count
      tooltip.select(".percent").html(percent + "%"); // set percent calculated above
      tooltip.style("display", "block"); // set display
    });

    path.on("mouseout", () => {  // when mouse leaves div
    tooltip.style("display", "none"); // hide tooltip for that element
    });

    path.on("mousemove", (d) => { // when mouse moves
    tooltip.style("top", (d3.event.layerY + 10) + "px") // always 10px below the cursor
      .style("left", (d3.event.layerX + 10) + "px"); // always 10px to the right of the mouse
    });

    // define legend
    const legend = svg.selectAll(legendStyle) // selecting elements with class 'legend'
    .data(color.domain()) // refers to an array of labels from our dataset
    .enter() // creates placeholder
    .append("g") // replace placeholders with g elements
    .attr("class", legendStyle) // each g is given a legend class
    .attr("transform", (d, i) => {
      // height of element is the height of the colored square plus the spacing
      const transformHeight = legendRectSize + legendSpacing;
      // vertical offset of the entire legend = height of a single element & half the total number of elements
      const offset =  transformHeight * color.domain().length / 2;
      // the legend is shifted to the left to make room for the text
      const horz = 9 * legendRectSize;
      // the top of the element is hifted up or down from the center
      // using the offset defiend earlier and the index of the current element 'i'
      const vert = i * transformHeight - offset;
      return "translate(" + horz + "," + vert + ")"; // return translation
    });

    // adding colored squares to legend
    legend.append("rect") // append rectangle squares to legend
    .attr("width", legendRectSize) // width of rect size is defined above
    .attr("height", legendRectSize) // height of rect size is defined above
    .style("fill", color) // each fill is passed a color
    .style("stroke", color) // each stroke is passed a color
    .on("click", function(label) {
      const rect = d3.select(this); // this refers to the colored squared just clicked
      let enabled = true; // set enabled true to default
      const totalEnabled = d3.sum(dataset.map((d: any) => { // can't disable all options
        return (d.enabled) ? 1 : 0; // return 1 for each enabled entry. and summing it up
      }));

      if (rect.attr("class") === disabledRect) { // if class is disabled
        rect.attr("class", ""); // remove class disabled
      } else { // else
        if (totalEnabled < 2) { return; } // if less than two labels are flagged, exit
        rect.attr("class", disabledRect); // otherwise flag the square disabled
        enabled = false; // set enabled to false
      }

      pie.value((d: any) => {
        if (d.label === label) { d.enabled = enabled; } // if entry label matches legend label
        return (d.enabled) ? d.count : 0; // update enabled property and return count or 0 based on the entry's status
      });

      path = path.data(pie(dataset)); // update pie with new data

      path.transition() // transition of redrawn pie
        .duration(750) //
        .attrTween("d", function(d) { // 'd' specifies the d attribute that we'll be animating
          // @ts-ignore
          const interpolate = d3.interpolate(this._current, d); // this = current path element
          // @ts-ignore
          this._current = interpolate(0); // interpolate between current value and the new value of 'd'
          return (t) => {
            return arc(interpolate(t));
          };
        });
    });

    // adding text to legend
    legend.append("text")
    .attr("x", legendRectSize + legendSpacing)
    .attr("y", legendRectSize - legendSpacing)
    .text((d) => d); // return label
  }

  public render() {
    const {
      id,
      className,
      width,
      height,
    } = this.props;
    return (
      <div
        key={`engaged-user-pie-${id}`}
        id={id || "svgWrapper"}
        className={cx(
          css`
            height: ${height}px;
            width: ${width}px;
          `,
          className,
          chartStyle,
        )}
      />
    );
  }
}

export { EngagedUserPieChartOrganism };
