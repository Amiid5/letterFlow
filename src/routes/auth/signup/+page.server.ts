import { inputValidation } from '$lib/validation/zod';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { auth } from '$lib/server/auth';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const result = inputValidation.safeParse(formData);
		if (!result.data) {
			return fail(400, {
				error: result.error.flatten().fieldErrors
			});
		}
		const { fullName, email, password, userName } = result.data;

		try {
			await auth.api.signUpEmail({
				body: {
					name: fullName,
					email,
					password,
					userName
				}
			});
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			fail(400, { error: 'email already exist' });
		}
		throw redirect(302, '/login');
	}
};
