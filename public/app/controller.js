angular.module('estructuras')
.component('interfaz', {
	templateUrl: 'app/interfaz.html',
	controller($math) {
		const vm = this;
		const PARABOLA = '/app/parabola.png';
		const RECTA = '/app/recta.png';
		vm.l1 = 1;
		vm.l2 = 3;
		vm.l3 = 3;
		vm.xo = 0;
		vm.yo = 0.8;
		vm.x1 = 1;
		vm.y1 = 0.4;

		vm.imgTramo1 = RECTA;
		vm.imgTramo2 = RECTA;
		vm.imgTramo3 = RECTA;

		/*console.log($math.getPhi1({
			l: vm.l1 + vm.l2 + vm.l3,
			L: ecRecta,
			start: 0,
			end: vm.l1,
			xo: vm.xo,
			yo: vm.yo,
			x1: vm.x1,
			y1: vm.y1
		}));*/

		vm.totalPhi1 = () => {
			return (
				$math.getPhi1({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1}) +
			    $math.getPhi1({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1}) + 
			    $math.getPhi1({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1})
			    )
		}

		vm.totalPhi2 = () => {
			return (
				$math.getPhi2({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1}) +
			    $math.getPhi2({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1}) + 
			    $math.getPhi2({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1})
			    )
		}

		vm.totalPhi3 = () => {
			return (
				$math.getPhi3({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1}) +
			    $math.getPhi3({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1}) + 
			    $math.getPhi3({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1})
			    )
		}

		vm.totalPhi4 = () => {
			return (
				$math.getPhi4({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1}) +
			    $math.getPhi4({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1}) + 
			    $math.getPhi4({l: vm.l1 + vm.l2 + vm.l3,L: ecRecta,start: 0,end: vm.l1,
			    xo: vm.xo,yo: vm.yo,x1: vm.x1,y1: vm.y1})
			    )
		}

		vm.ci = () => {
			return vm.totalPhi1() / ((vm.totalPhi1()- vm.totalPhi2()) - Math.pow(vm.totalPhi3(),2));
		}

		vm.c = () => {
			return vm.totalPhi3() / ((vm.totalPhi1()- vm.totalPhi2()) - Math.pow(vm.totalPhi3(),2));
		}

		vm.cj = () => {
			return vm.totalPhi2() / ((vm.totalPhi1()- vm.totalPhi2()) - Math.pow(vm.totalPhi3(),2));
		}

		vm.ca = () => {
			return 1 / vm.totalPhi4();
		}

		vm.ri1 = () => {
			return vm.q * ((vm.l1 + vm.l2 + vm.l3)/2);
		}

		vm.rj1 = () => {
			return vm.q * ((vm.l1 + vm.l2 + vm.l3)/2);
		}

		vm.ri2 = () => {
			return 1 / vm.totalPhi4();
		}

		vm.rj2 = () => {
			return (vm.p * vm.l1)/(vm.l1 + vm.l2 + vm.l3);
		}

		function ecRecta(x, xo, yo, x1, y1) {
			return (((y1-yo)/(x1-xo))*(x-xo))+yo;
		}

		function ecParabola(x, xo, yo, x1, y1) {
			const p = x1 / Math.pow(y1-yo, 2);
			return yo - Math.sqrt(x/4*p);
		}
	}
});