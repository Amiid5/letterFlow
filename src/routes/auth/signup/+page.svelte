<script>
	import { enhance } from '$app/forms';
	import GoogleSvg from '$lib/components/ui/googleSvg.svelte';
	let loading = $state(false);
	let errors = $state({});
	let serverError = $state('');
	function handleEnhance() {
		loading = true;
		errors = {};
		serverError = '';

		return async ({ result, update }) => {
			if (result.type === 'failure') {
				errors = result.data.errors;
				loading = false;
				serverError = result.data.error;
			}
			await update();
		};
	}
</script>

<div class="mx-auto px-6 font-inter flex flex-col gap-4 my-10">
	<div>
		<button
			class="flex w-full gap-2 font-inter justify-center border border-black/30 font-medium tracking-wider cursor-pointer hover:text-black hover:bg-white items-center bg-black text-white px-10 py-2 rounded"
		>
			<GoogleSvg /> Signup with google
		</button>
	</div>
	<div class="w-full flex items-center gap-4 mt-4">
		<div class="w-1/2 h-0.5 bg-black/30"></div>
		<div class="font-medium font-inter">or</div>
		<div class="w-1/2 h-0.5 bg-black/30"></div>
	</div>

	<form class="flex flex-col gap-3" method="post" use:enhance{handleEnhance}>
		<div class="flex flex-col gap-1">
			<label
				spellcheck="false"
				for="fullName"
				class="capitalize font-medium font-inter tracking-wide">fullname:</label
			>
			<div>
				<input type="text" class="border outline-none px-4 py-1 w-full rounded" />
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<label for="email" class="capitalize font-medium font-inter tracking-wide">email:</label>
			<div>
				<input type="text" class="border outline-none px-4 py-1 w-full rounded" />
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<label for="username" class="capitalize font-medium font-inter tracking-wide">username:</label
			>
			<div>
				<input type="text" class="border outline-none px-4 py-1 w-full rounded" />
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<label for="password" class="capitalize font-medium font-inter tracking-wide">password:</label
			>
			<div>
				<input type="text" class="border outline-none px-4 py-1 w-full rounded" />
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<label for="confirm_password" class="capitalize font-medium font-inter tracking-wide"
				>confirm password:</label
			>
			<div>
				<input type="text" class="border outline-none px-4 py-1 w-full rounded" />
			</div>
		</div>
		<button
			type="submit"
			class=" w-full mt-3 hover:bg-white hover:text-black border font-inter tracking-wider font-medium cursor-pointer border-black/30 font-inter bg-black text-white px-10 py-2 rounded"
		>
			Create account
		</button>
		<span class="text-center mt-2 text-black/50 font-medium font-inter">
			already have acount? <a href="/" class="text-black hover:text-blue-500 cursor-pointer"
				>login</a
			>
		</span>
	</form>
</div>
