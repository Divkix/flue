import { createAgent, createWorkflow, type WorkflowRouteHandler } from '@flue/runtime';

export const route: WorkflowRouteHandler = async (_c, next) => next();
const agent = createAgent(() => ({ model: 'ollama/llama3.1:8b' }));

export default createWorkflow({
	agent,
	async run({ harness }) {
		const session = await harness.session();
		return { ok: true, hasSession: typeof session === 'object' };
	},
});
