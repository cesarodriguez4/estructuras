angular.module('estructuras')
.factory('$math', () => {
  const res = {
  	getPhi1: fx => {
      return integratePhi(phi1,fx);
  	},
    getPhi2: fx => {
      return integratePhi(phi2,fx);
    },
    getPhi3: fx => {
      return integratePhi(phi3,fx);
    },
    getPhi4: fx => {
      return integratePhi(phi4,fx);
    }
  }
  return res;
});

function phi1(x,l,fn, pt) {
  return Math.pow(x/l,2) / Math.pow(fn(x, pt.xo, pt.yo, pt.x1, pt.y1),3);
}

function phi2(x,l,fn, pt) {
  return Math.pow((x/l) - 1,2) / Math.pow(fn(x, pt.xo, pt.yo, pt.x1, pt.y1),3);
}

function phi3(x,l,fn, pt) {
  return ((x/l)-1)*(x/l) / Math.pow(fn(x, pt.xo, pt.yo, pt.x1, pt.y1),3);
}

function phi4(x,l,fn, pt) {
  return 1 / Math.pow(fn(x, pt.xo, pt.yo, pt.x1, pt.y1),3);
}

function integratePhi(f,fx,step) {
  var total = 0;
  step = step || 0.01;
  for (var x = fx.start; x < fx.end; x += step) {
    total += f(x + step / 2, fx.l, fx.L, {
      xo: fx.xo,
      yo: fx.yo,
      x1: fx.x1,
      y1: fx.y1
    }) * step;
  }
  return total;
}