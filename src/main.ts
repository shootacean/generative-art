import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0, 0, 0);
  };

  p.draw = () => {
    // drawBlackAndWhiteByVertical();
    drawBlackAndWhiteByHorizontal();
  };

  // 背景色を2分割する
  function drawSplitBackgroundColor(vertical: boolean) {
    if (vertical) {
      // 黒背景左半分
      p.fill(0, 0, 0);
      p.rect(0, 0, p.width, p.height / 2);

      // 白背景右半分
      p.fill(255, 255, 255);
      p.rect(0, p.height / 2, p.width, p.height);
    } else {
      // 黒背景左半分
      p.fill(0, 0, 0);
      p.rect(0, 0, p.width / 2, p.height);

      // 白背景右半分
      p.fill(255, 255, 255);
      p.rect(p.width / 2, 0, p.width / 2, p.height);
    }
  }

  // 白黒背景で反転する円(上下分割)
  function drawBlackAndWhiteByHorizontal() {
    p.noStroke();

    drawSplitBackgroundColor(true);

    // 境界で色を変える
    if (p.mouseY < p.height / 2) {
      p.fill(255, 255, 255);
    } else {
      p.fill(0, 0, 0);
    }

    p.circle(p.mouseX, p.mouseY, 100);
  }

  // 白黒背景で反転する円(左右分割)
  function drawBlackAndWhiteByVertical() {
    p.noStroke();

    drawSplitBackgroundColor(false);

    // 境界で色を変える
    if (p.mouseX < p.width / 2) {
      p.fill(255, 255, 255);
    } else {
      p.fill(0, 0, 0);
    }

    p.circle(p.mouseX, p.mouseY, 100);
  }
};

new p5(sketch);
