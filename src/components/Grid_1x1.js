import "./Grid.css"
import React, { Component } from 'react';
//TODO

class Grid_1x1 extends Component {
	state = {  }
	render() { 

		const {row_index, col_index, selectedGrid, value, fixed} = this.props;

		let gridStyle = {
		color: this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
		backgroundColor: this.props.conflicted ? "#E77" : "#FFF",
		border: "1.5px solid #999"
		};
		if(col_index % 3 === 0){
			gridStyle["border-left"] = "1.5px solid transparent";
		}
		if(col_index % 3 === 2){
			gridStyle["border-right"] = "1.5px solid transparent";
		}
		if(row_index % 3 === 0){
			gridStyle["border-top"] = "1.5px solid transparent";
		}
		if(row_index % 3 === 2){
			gridStyle["border-bottom"] = "1.5px solid transparent";
		}
		
		// when selected
		if(row_index === selectedGrid.row_index && col_index === selectedGrid.col_index){
			if(!fixed) {
				gridStyle["backgroundColor"] = "#333";
				gridStyle["color"] = "#FFF";
			}
		}

	return (
		<div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
			{ this.props.value === "0" ? "" : this.props.value}
		</div>
	);
	}

	isBorder(row, col){
		return ((row === 0 || row === 8) || (col === 0 || col === 8));
	}

	isCentral(row, col){
		return ((row === 1 || row === 4 || row === 8) && (col === 1 || col === 4 || col === 8));
	}
}
 
export default Grid_1x1;
