<template>
	<div
		class="event"
		@contextmenu="$emit('rightClick')"
		@click="$emit('eventClicked')"
	>
		<h2>{{ title }}</h2>
		<div class="due">
			<span class="amount">{{ amount }}</span>
			<span class="unit">{{ unit }}</span>
		</div>
	</div>
</template>

<script>
const moment = require("moment");

export default {
	name: "Event",
	props: {
		index: { type: Number, required: true },
		title: { type: String, required: true },
		due: { type: Object, required: true }
	},
	computed: {
		amount() {
			const fromNow = moment(this.due).fromNow(
				moment().isBefore(moment(this.due))
			);
			const amount = fromNow.substring(0, fromNow.indexOf(" "));
			return amount === "a" || amount === "an" ? "1" : amount;
		},
		unit() {
			const str = moment(this.due).fromNow(moment().isBefore(moment(this.due)));
			return str.substring(str.indexOf(" "));
		}
	}
};
</script>

<style scoped lang="scss">
$bg-light: #fff;
$light-grey: #eee;
$placeholder: #aaa;
$el-dark: #000;
$font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
	Arial, sans-serif;

.event {
	padding: 2em 2em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	h2 {
		margin: 0;
		font-size: 1.75em;
		display: inline;
	}
	.due {
		display: flex;
		flex-direction: column;
		text-align: right;
		min-width: 4em;
		.amount {
			font-size: 2em;
			font-weight: 700;
		}
	}
}
</style>
