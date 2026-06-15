import { z } from 'zod';

export const inputValidation = z
	.object({
		fullName: z.string().min(3).max(70),
		email: z.email(),
		userName: z.string(),
		password: z
			.string()
			.min(8)
			.max(50)
			.regex(/[A-Z]/, 'must contain capital')
			.regex(/[0-9]/, 'must contain number'),
		confirmPassword: z.string()
	})
	.refine((data) => (data.password = data.confirmPassword), {
		message: 'password do not match',
		path: ['confirmPassword']
	});

export type InputSchema = z.infer<typeof inputValidation>;
