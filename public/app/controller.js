angular.module('estructuras')
.component('interfaz', {
	templateUrl: 'app/interfaz.html',
	controller($math) {
		const vm = this;
		const PARABOLA = '/app/parabola.png';
		const RECTA = '/app/recta.png';
		vm.l1 = 1;
		vm.l2 = 1;
		vm.l3 = 1;
		vm.h1 = 1;
		vm.h2 = 1;
		vm.h3 = 1;

		vm.imgTramo1 = RECTA;
		vm.imgTramo2 = RECTA;
		vm.imgTramo3 = RECTA;

		function ecRecta(x, xo, yo, x1, y1) {
			return (((y1-yo)/(x1-xo))*(x-xo))+yo;
		}

		function ecParabola(x, xo, yo, x1, y1) {
			const p = x1 / Math.pow(y1-yo, 2);
			return yo - Math.sqrt(x/4*p);
		}

		vm.totalPhi1 = () => {
			if (vm.totalTramos == 3) {
				return (
				Math.pow(vm.h1 / vm.l1 + vm.l2 + vm.l3 ,3) *
				(
					$math.getPhi1({
					l: vm.l1 + vm.l2 + vm.l3,
					L: ecRecta,
					start: 0,
					end: vm.l1,
					xo: 0,
					yo: 0,
					x1: vm.l1,
					y1: vm.h1}) 
				+
			    $math.getPhi1({
			    	l: vm.l1 + vm.l2 + vm.l3,
			    	L: ecRecta,
			    	start: vm.l1,
			    	end: vm.l2,
			    	xo: vm.l1,
			    	yo: vm.h2,
			    	x1: vm.l1 + vm.l2,
			    	y1: 0}) + 
			    $math.getPhi1({
			    	l: vm.l1 + vm.l2 + vm.l3,
			    	L: ecRecta,
			    	start: vm.l2,
			    	end: vm.l3,
			    	xo: vm.l1 + vm.l2,
			    	yo: 0,
			    	x1: vm.l1 + vm.l2 + vm.l3,
			    	y1: vm.h3})
			      )
			    );
			} else {
				return $math.getPhi1({
					l: vm.l1,
					L: (vm.imgTramo1==='/app/parabola.png'?ecParabola:ecRecta),
					start: 0,
					end: vm.l1,
					xo: 0,
					yo: 0,
					x1: vm.l1,
					y1: vm.h1});
			}
			
		};

		vm.totalPhi2 = () => {
			if (vm.totalTramos == 3) {
			return (
				Math.pow(vm.h1 / vm.l1 + vm.l2 + vm.l3 ,3) *
				($math.getPhi2({
					l: vm.l1 + vm.l2 + vm.l3,
					L: ecRecta,
					start: 0,
					end: vm.l1,
					xo: 0,
					yo: 0,
					x1: vm.l1,
					y1: vm.h1}) 
				+
			    $math.getPhi2({
			    	l: vm.l1 + vm.l2 + vm.l3,
			    	L: ecRecta,
			    	start: vm.l1,
			    	end: vm.l2,
			    	xo: vm.l1,
			    	yo: vm.h2,
			    	x1: vm.l1 + vm.l2,
			    	y1: 0}) + 
			    $math.getPhi2({
			    	l: vm.l1 + vm.l2 + vm.l3,
			    	L: ecRecta,
			    	start: vm.l2,
			    	end: vm.l3,
			    	xo: vm.l1 + vm.l2,
			    	yo: 0,
			    	x1: vm.l1 + vm.l2 + vm.l3,
			    	y1: vm.h3}))
			    );
		} else {
			return Math.pow(vm.h1 / vm.l1 ,3) * $math.getPhi2({
					l: vm.l1,
					L: (vm.imgTramo1==='/app/parabola.png'?ecParabola:ecRecta),
					start: 0,
					end: vm.l1,
					xo: 0,
					yo: 0,
					x1: vm.l1,
					y1: vm.h1});
		   }
		};

		vm.totalPhi3 = () => {
			if (vm.totalTramos == 3) {
			return (
				Math.pow(vm.h1 / vm.l1 + vm.l2 + vm.l3 ,3) *
				($math.getPhi3({
					l: vm.l1 + vm.l2 + vm.l3,
					L: ecRecta,
					start: 0,
					end: vm.l1,
					xo: 0,
					yo: 0,
					x1: vm.l1,
					y1: vm.h1}) 
				+
			    $math.getPhi3({
			    	l: vm.l1 + vm.l2 + vm.l3,
			    	L: ecRecta,
			    	start: vm.l1,
			    	end: vm.l2,
			    	xo: vm.l1,
			    	yo: vm.h2,
			    	x1: vm.l1 + vm.l2,
			    	y1: 0}) + 
			    $math.getPhi3({
			    	l: vm.l1 + vm.l2 + vm.l3,
			    	L: ecRecta,
			    	start: vm.l2,
			    	end: vm.l3,
			    	xo: vm.l1 + vm.l2,
			    	yo: 0,
			    	x1: vm.l1 + vm.l2 + vm.l3,
			    	y1: vm.h3}))
			    );
		  } else {
            return Math.pow(vm.h1 / vm.l1 ,3) * $math.getPhi3({
					l: vm.l1,
					L: (vm.imgTramo1==='/app/parabola.png'?ecParabola:ecRecta),
					start: 0,
					end: vm.l1,
					xo: 0,
					yo: 0,
					x1: vm.l1,
					y1: vm.h1});
		    }
		};

		vm.totalPhi4 = () => {
			if (vm.totalTramos == 3) {
			return (
				Math.pow(vm.h1 / vm.l1 + vm.l2 + vm.l3 ,3) *
				($math.getPhi4({
					l: vm.l1 + vm.l2 + vm.l3,
					L: ecRecta,
					start: 0,
					end: vm.l1,
					xo: 0,
					yo: 0,
					x1: vm.l1,
					y1: vm.h1}) 
				+
			    $math.getPhi4({
			    	l: vm.l1 + vm.l2 + vm.l3,
			    	L: ecRecta,
			    	start: vm.l1,
			    	end: vm.l2,
			    	xo: vm.l1,
			    	yo: vm.h2,
			    	x1: vm.l1 + vm.l2,
			    	y1: 0}) + 
			    $math.getPhi4({
			    	l: vm.l1 + vm.l2 + vm.l3,
			    	L: ecRecta,
			    	start: vm.l2,
			    	end: vm.l3,
			    	xo: vm.l1 + vm.l2,
			    	yo: 0,
			    	x1: vm.l1 + vm.l2 + vm.l3,
			    	y1: vm.h3}))
			    );
		  } else {
		  	return Math.pow(vm.h1 / vm.l1 ,3) * $math.getPhi4({
					l: vm.l1,
					L: (vm.imgTramo1==='/app/parabola.png'?ecParabola:ecRecta),
					start: 0,
					end: vm.l1,
					xo: 0,
					yo: 0,
					x1: vm.l1,
					y1: vm.h1});
		    }
		};

		vm.ci = () => {
			return vm.totalPhi1() / ((vm.totalPhi1()- vm.totalPhi2()) - Math.pow(vm.totalPhi3(),2));
		};

		vm.c = () => {
			return vm.totalPhi3() / ((vm.totalPhi1()- vm.totalPhi2()) - Math.pow(vm.totalPhi3(),2));
		};

		vm.cj = () => {
			return vm.totalPhi2() / ((vm.totalPhi1()- vm.totalPhi2()) - Math.pow(vm.totalPhi3(),2));
		};

		vm.ca = () => {
			return 1 / vm.totalPhi4();
		};

		vm.ri1 = () => {
			return vm.q * ((vm.l1 + vm.l2 + vm.l3)/2);
		};

		vm.rj1 = () => {
			return vm.q * ((vm.l1 + vm.l2 + vm.l3)/2);
		};

		vm.ri2 = () => {
			return 1 / vm.totalPhi4();
		};

		vm.rj2 = () => {
			return (vm.p * vm.l1)/(vm.l1 + vm.l2 + vm.l3);
		};
	}
});