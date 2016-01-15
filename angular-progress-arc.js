var ProgressArc = React.createClass({
	displayName: 'ProgressArc',
	getDefaultProps: function getDefaultProps(){
		return {
			size: 100,
			strokeWidth: 10,
			stroke: '#fff',
			counterClockwise: 'false',
			background: null
		};
	},
	render: function render(){
		var size = parseInt(this.props.size),
			strokeWidth = parseInt(this.props.strokeWidth),
			stroke = this.props.stroke,
			counterClockwise = this.props.counterClockwise,
			background = this.props.background,
			complete = parseFloat(this.props.complete),
			offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90,
			strokeWidthCapped = Math.min(strokeWidth, size / 2 - 1),
			radius = Math.max((size - strokeWidthCapped) / 2 - 1, 0),
			circumference = 2 * Math.PI * radius,
			backgroundElement,
			transform = 'rotate(' + offset + ', ' + size/2 + ', ' + size/2 + ')';

		if (background !== null) {
			backgroundElement = React.createElement('circle', {fill: 'none', cx: (size/2) + 'px', cy: (size/2) + 'px', r: radius + 'px', stroke: background, strokeWidth: strokeWidthCapped});
		}

		if (counterClockwise && counterClockwise != 'false') {
			transform += ' translate(0, ' + size + ') scale(1, -1)';
		}

		return (
			React.createElement('svg', {width: size + 'px', height: size + 'px'},
				backgroundElement,
				React.createElement('circle', {fill: 'none', cx: (size/2) + 'px', cy: (size/2) + 'px', r: radius + 'px', stroke: stroke, strokeWidth: strokeWidthCapped, strokeDasharray: circumference, style: {strokeDashoffset: ((1 - complete) * circumference)}, transform: transform})
			)
		);
	}
});
