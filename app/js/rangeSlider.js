setTimeout(init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2'), 0);

function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
  const slider = document.getElementById(idX);
  const between = document.getElementById(btwX);
  const button1 = document.getElementById(btn1X);
  const button2 = document.getElementById(btn2X);
  const inpt1 = document.getElementById(input1);
  const inpt2 = document.getElementById(input2);

  const min = 0;
  const max = 500000;

  function getLeftCoord(input) {
    const per = parseInt(100 / (max / input.value));
    const left = per * (slider.offsetWidth - button1.offsetWidth) / 100;
    return left;
  }

  /*init*/
  button1.style.marginLeft = `${getLeftCoord(inpt1)}px`;
  button2.style.marginLeft = `${getLeftCoord(inpt2)}px`;
  between.style.marginLeft = `${getLeftCoord(inpt1)}px`;
  between.style.width = `${(slider.offsetWidth - getLeftCoord(inpt1)) - (slider.offsetWidth - getLeftCoord(inpt2))}px`;

  function init(inp1, inp2) {
    inp1.addEventListener('change', function (evt) {
      evt.preventDefault();
      if (parseInt(inp1.value) < min)
        inp1.value = min;
      if (parseInt(inp1.value) > max)
        inp1.value = max;
      if (parseInt(inp1.value) > parseInt(inp2.value)) {
        const temp = inp1.value;
        inp1.value = inp2.value;
        inp1.value = temp;
      }

      const left1 = getLeftCoord(inpt1);
      const left2 = getLeftCoord(inpt2);

      button1.style.marginLeft = left1 + 'px';
      button2.style.marginLeft = left2 + 'px';

      if (left1 > left2) {
        between.style.width = (left1 - left2) + 'px';
        between.style.marginLeft = left2 + 'px';
      } else {
        between.style.width = (left2 - left1) + 'px';
        between.style.marginLeft = left1 + 'px';
      }
    });
  }

  init(inpt1, inpt2);
  init(inpt2, inpt1);

  /*mouse*/
button1.onmousedown = function (evt) {
  const sliderCoords = getCoords(slider);
  const buttonCoords1 = getCoords(button1);
  const buttonCoords2 = getCoords(button2);
  let shiftX2 = evt.pageX - buttonCoords2.left;
  let shiftX1 = evt.pageX - buttonCoords1.left;

  document.onmousemove = function (evt) {
    let left1 = evt.pageX - shiftX1 - sliderCoords.left;
    let right1 = slider.offsetWidth - button1.offsetWidth;
    if (left1 < 0) left1 = 0;
    if (left1 > right1) left1 = right1;
    button1.style.marginLeft = left1 + 'px';


    shiftX2 = evt.pageX - buttonCoords2.left;
    let left2 = evt.pageX - shiftX2 - sliderCoords.left;
    let right2 = slider.offsetWidth - button2.offsetWidth;
    if (left2 < 0) left2 = 0;
    if (left2 > right2) left2 = right2;

    let per_min = 0;
    let per_max = 0;

    if (left1 > left2) {
      between.style.width = (left1 - left2) + 'px';
      between.style.marginLeft = left2 + 'px';

      per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
    } else {
      between.style.width = (left2 - left1) + 'px';
      between.style.marginLeft = left1 + 'px';

      per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
    }
    inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
    inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));
  };

  document.onmouseup = function () {
    document.onmousemove = document.onmouseup = null;
  };

  return false;
};

button2.onmousedown = function (evt) {
  const sliderCoords = getCoords(slider);
  const buttonCoords1 = getCoords(button1);
  const buttonCoords2 = getCoords(button2);
  let shiftX2 = evt.pageX - buttonCoords2.left;
  let shiftX1 = evt.pageX - buttonCoords1.left;

  document.onmousemove = function (evt) {
    let left2 = evt.pageX - shiftX2 - sliderCoords.left;
    let right2 = slider.offsetWidth - button2.offsetWidth;
    if (left2 < 0) left2 = 0;
    if (left2 > right2) left2 = right2;
    button2.style.marginLeft = left2 + 'px';


    shiftX1 = evt.pageX - buttonCoords1.left;
    let left1 = evt.pageX - shiftX1 - sliderCoords.left;
    let right1 = slider.offsetWidth - button1.offsetWidth;
    if (left1 < 0) left1 = 0;
    if (left1 > right1) left1 = right1;

    let per_min = 0;
    let per_max = 0;

    if (left1 > left2) {
      between.style.width = (left1 - left2) + 'px';
      between.style.marginLeft = left2 + 'px';
      per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
    } else {
      between.style.width = (left2 - left1) + 'px';
      between.style.marginLeft = left1 + 'px';
      per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
    }
    inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
    inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

  };

  document.onmouseup = function () {
    document.onmousemove = document.onmouseup = null;
  };
  return false;
};

button1.addEventListener('dragstart', () => {
  return false;
});

button2.addEventListener('dragstart', () => {
  return false;
});

function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

}