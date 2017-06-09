```
const styles = {
  width: 100,
  height: 100,
  padding: '1em',
  margin: '0 1em',
  color: 'rgb(255,255, 255)',
};

const orange = '#F17232';
const green = '#84C340';
const blue = '#40ACC3';
const gray = '#94A5A3';
const darkGray = '#7C8E8C';
const night = '#444444';

<div style={{display: 'flex'}}>
  <div style={{...styles, backgroundColor: green}}>
    <h3>Green</h3>
    {green}
  </div>

  <div style={{...styles, backgroundColor: blue}}>
    <h3>Blue</h3>
    {blue}
  </div>

  <div style={{...styles, backgroundColor: orange}}>
    <h3>Orange</h3>
    {orange}
  </div>

  <div style={{...styles, backgroundColor: gray}}>
    <h3>Gray</h3>
    {gray}
  </div>

  <div style={{...styles, backgroundColor: darkGray}}>
    <h3>Dark Gray</h3>
    {darkGray}
  </div>

  <div style={{...styles, backgroundColor: night}}>
    <h3>Night</h3>
    {night}
  </div>
</div>
```
