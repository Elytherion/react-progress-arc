react-progress-arc
====================

An [ReactJS](http://facebook.github.io/react/index.html) component for displaying a circular progress meter. This is a fork of the [AngularJS equivalent](https://github.com/mathewbyrne/angular-progress-arc).

<p align="center"><img src="http://mathewbyrne.github.io/angular-progress-arc/img/arcs.png" /></p>

Features
========

- Displays a circular progress meter.
- Utilises SVG for rendering.
- Adjustable dimensions, color and thickness.
- No additional dependencies outside of React.

Installation
============

You can add the plugin by adding react-progress-arc-x.x.x.js to your project.

Usage
=====

Include the script in your application. Add a ProgressArc element where needed.

```javascript
React.createElement(ProgressArc, {
    size: {integer},
    stroke: {string},
    strokeWidth: {integer},
    complete: {expression},
    counterClockwise: {string},
    background: {string}
})
```

```jsx
<ProgressArc
    size="{integer}"
    stroke="{string}"
    stroke-width="{integer}"
    complete="{expression}"
    counter-clockwise="{string}"
    background="{string}"
/>
```

Attributes
----------

- `size` defines the pixel width and height for the svg element.  This defaults to __200__.
- `stroke` defines the color of the progress arc. This should be a valid [stroke property](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes#Stroke) for an SVG circle element.  This defaults to __black__.
- `stroke-width` defines the width of the progress arc line in pixels. This should be a value between 1 and `size` / 2. This defaults to __20__.
- `complete` is an expression that should evaluate to a float value between 0.0 and 1.0; where 0.0 is an empty progress arc, and 1.0 is a full ring.
- `counter-clockwise` is a boolean value that will render the progress arc in a counter-clockwise direction. Any value Javascript would recognise as true will be treated as such, with the exception of the literal string __false__ which will be treated as a boolean `false`.
- `background` defines the color of the ring background. If not defined, no background is rendered.

Styling
=======

As well as using attributes of the directive element, a progress arc can be styled using CSS.

```css
// Use a more complex selector in your application to avoid styling other SVG elements.
circle {
    stroke: rgba(0, 0, 0, 0.1);
    stroke-linecap: round;
}
```

The `stroke-dashoffset` property is used to render the position of the progress arc, so adding a transition for this property will result in smoother transitions between progress values.

```css
circle {
    transition: stroke-dashoffset 0.1s linear;
}
```

If you use CSS for styling, avoid setting the following properties that are used to calculate the progress arc position:
- `stroke-width`
- `stroke-dasharray`
- `stroke-dashoffset`

Defaults
========

For the current version you can't use an external function, but you have to change the corresponding values in the `getDefaultProps`. Maybe somebody knows how to change the default props with an external function.

License
=======

react-progress-arc is licensed under the MIT license. See LICENSE for details.
