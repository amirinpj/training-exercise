window.Event = new Vue();

Vue.component('coupon', {

	template: '<input placeholder="Enter your coupon" @blur="onCouponApplied">',
	methods: {
		onCouponApplied() {
			Event.$emit('applied');
		}
	}
});

new Vue({

	el: '#root',
	data: {
		couponApplied: false
	},
	methods: {
		onCouponApplied() {
			this.couponApplied = true;
		}
	},
	created() {
		Event.$on('applied', () => alert('Handling'));
	}

});